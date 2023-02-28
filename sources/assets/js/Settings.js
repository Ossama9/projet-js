import {LocalStorageManager} from "./LocalStorageManager";

class Settings {
    constructor() {
        this.file = '';
        this.bc = new BroadcastChannel('settings');

        this.showLevelBatteryEl = document.querySelector("#show_level_battery")

        this.darkModeInputEl = document.querySelector("#dark-mode-toggle")

        this.showYearEl = document.querySelector("#show-year");
        this.showMonthEl = document.querySelector("#show-month");
        this.showDayEl = document.querySelector("#show-day");

        this.showHoursEl = document.querySelector("#show-hours")
        this.showMinutesEl = document.querySelector("#show-minutes")
        this.showSecondsEl = document.querySelector("#show-seconds")

        this.showNetworkLatencyEl = document.querySelector("#show-latency");
        this.pingServerEl = document.querySelector("#ping-server");
        this.refreshIntervalEl = document.querySelector("#refresh-interval");
        this.buttonApplyChangesEl = document.querySelector("#apply-changes");
        this.buttonApplyChangesEl = document.querySelector("#apply-changes");
        this.exportConfigEl = document.querySelector("#export-config");
        this.dropAreaEl = document.querySelector(".drag-area");
        this.dragTextEl = document.querySelector("#header");
        this.inputFileEl = document.querySelector("#input-file");

        this.buttonApplyChangesEl.addEventListener('click', this.applyChanges.bind(this));
        this.exportConfigEl.addEventListener('click', this.exportConfig.bind(this));

        this.darkModeInputEl.addEventListener('click', this.switchToDark.bind(this));


        this.inputFileEl.addEventListener('change', this.handleInput.bind(this));
        this.dropAreaEl.addEventListener("dragover", (event) => {
            event.preventDefault(); //preventing from default behaviour
            this.dropAreaEl.classList.add("active");
            this.dragTextEl.textContent = "Release to Upload File";
        });
        this.dropAreaEl.addEventListener('dragleave', () => {
            this.dropAreaEl.classList.remove("active");
            this.dragTextEl.textContent = "Drag & Drop to Upload File";
        });
        this.dropAreaEl.addEventListener('drop', (event) => {
            event.preventDefault();
            this.file = event.dataTransfer.files[0]
            this.dropAreaEl.innerHTML = this.file.name;

        });

        this.localStorageManager = new LocalStorageManager('mySettings')
        this.loadSettings();
    }

    handleInput() {
        this.dropAreaEl.classList.add("active");
        this.file = this.inputFileEl.files[0];
        this.dropAreaEl.innerHTML = this.file.name;
    }
    switchToDark() {
        if (this.darkModeInputEl.checked){
            document.body.classList.add('dark')
        }
        else{
            document.body.classList.remove('dark')
        }
    }


    async applyChanges() {
        this.localStorageManager.setProperty('showLevelBattery', this.showLevelBatteryEl.checked);

        this.localStorageManager.setProperty('enableDarkMode', this.darkModeInputEl.checked);

        this.localStorageManager.setProperty('showYear', this.showYearEl.checked);
        this.localStorageManager.setProperty('showMonth', this.showMonthEl.checked);
        this.localStorageManager.setProperty('showDay', this.showDayEl.checked);

        this.localStorageManager.setProperty('showHours', this.showHoursEl.checked);
        this.localStorageManager.setProperty('showMinutes', this.showMinutesEl.checked);
        this.localStorageManager.setProperty('showSeconds', this.showSecondsEl.checked);

        this.localStorageManager.setProperty("showNetworkLatency", this.showNetworkLatencyEl.checked);
        this.localStorageManager.setProperty("pingServer", this.pingServerEl.value);
        this.localStorageManager.setProperty("refreshInterval", this.refreshIntervalEl.value);


        try {
            await this.importConfig()
            console.log('Les fichiers de conf sont à jour');
        } catch (error) {
            console.error(error);
        }
        this.bc.postMessage('reload')
        location.reload()
    }

    loadSettings() {
        const enableDarkMode = this.localStorageManager.getProperty("enableDarkMode");
        const showLevelBattery = this.localStorageManager.getProperty("showLevelBattery");
        if (showLevelBattery !== undefined) {
            this.darkModeInputEl.checked = enableDarkMode;
            this.switchToDark()
        }
        const showYear = this.localStorageManager.getProperty("showYear");
        const showMonth = this.localStorageManager.getProperty("showMonth");
        const showDay = this.localStorageManager.getProperty("showDay");
        const showHours = this.localStorageManager.getProperty('showHours');
        const showMinutes = this.localStorageManager.getProperty('showMinutes');
        const showSeconds = this.localStorageManager.getProperty('showSeconds');
        const showNetworkLatency = this.localStorageManager.getProperty("showNetworkLatency");
        const pingServer = this.localStorageManager.getProperty("pingServer");
        const refreshInterval = this.localStorageManager.getProperty("refreshInterval");


        if (showLevelBattery !== undefined) {
            this.showLevelBatteryEl.checked = showLevelBattery;
        }

        if (showYear !== undefined) {
            this.showYearEl.checked = showYear;
        }
        if (showMonth !== undefined) {
            this.showMonthEl.checked = showMonth;
        }
        if (showDay !== undefined) {
            this.showDayEl.checked = showDay;
        }
        if (showHours !== undefined) {
            this.showHoursEl.checked = showHours;
        }
        if (showMinutes !== undefined) {
            this.showMinutesEl.checked = showMinutes;
        }
        if (showSeconds !== undefined) {
            this.showSecondsEl.checked = showSeconds;
        }

        if (showNetworkLatency !== undefined) {
            this.showNetworkLatencyEl.checked = showNetworkLatency;
        }
        if (pingServer !== undefined) {
            this.pingServerEl.value = pingServer;
        }
        if (refreshInterval !== undefined) {
            this.refreshIntervalEl.value = refreshInterval;
        }
    }

    exportConfig() {
        const mySettings = JSON.stringify(this.localStorageManager.load());
        const downloadLink = document.createElement('a');
        downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(mySettings));
        downloadLink.setAttribute('download', 'my-config.json');
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }


    async importConfig() {
        const file = this.file;
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        return new Promise((resolve, reject) => {
            fileReader.onload = async () => {
                const myConfig = JSON.parse(fileReader.result);
                for (const key of Object.keys(myConfig)) {
                    await this.localStorageManager.setProperty(key, myConfig[key]);
                }
                resolve();
            };
            fileReader.onerror = () => {
                reject(new Error('Error liée au fichier'));
            };
        });
    }
}

export {Settings}