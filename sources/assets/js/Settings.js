import {LocalStorageManager} from "./LocalStorageManager";

class Settings {
    constructor() {
        this.showLevelBatteryEl = document.querySelector("#show_level_battery")

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

        this.buttonApplyChangesEl.addEventListener('click',this.applyChanges.bind(this));

        this.localStorageManager = new LocalStorageManager('mySettings')
        this.loadSettings();
    }

    applyChanges() {
        this.localStorageManager.setProperty('showLevelBattery', this.showLevelBatteryEl.checked);

        this.localStorageManager.setProperty('showYear', this.showYearEl.checked);
        this.localStorageManager.setProperty('showMonth', this.showMonthEl.checked);
        this.localStorageManager.setProperty('showDay', this.showDayEl.checked);

        this.localStorageManager.setProperty('showHours', this.showHoursEl.checked);
        this.localStorageManager.setProperty('showMinutes', this.showMinutesEl.checked);
        this.localStorageManager.setProperty('showSeconds', this.showSecondsEl.checked);

        this.localStorageManager.setProperty("showNetworkLatency", this.showNetworkLatencyEl.checked);
        this.localStorageManager.setProperty("pingServer", this.pingServerEl.value);
        this.localStorageManager.setProperty("refreshInterval", this.refreshIntervalEl.value);
        location.reload()
    }

    loadSettings() {
        const showLevelBattery = this.localStorageManager.getProperty("showLevelBattery");
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
}

export {Settings}