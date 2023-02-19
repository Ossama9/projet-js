import { LocalStorageManager } from "./LocalStorageManager";

class Settings {
    constructor() {
        this.showLevelBatteryEl = document.querySelector("#show_level_battery");
        this.showLevelBatteryEl.addEventListener(
            "change",
            this.handleBatteryLevelToggle.bind(this)
        );

        this.showNetworkLatencyEl = document.querySelector("#show_network_latency");
        this.showNetworkLatencyEl.addEventListener(
            "change",
            this.handleNetworkLatencyToggle.bind(this)
        );

        this.pingServerInputEl = document.querySelector("#ping_server");
        this.pingServerInputEl.addEventListener(
            "input",
            this.handlePingServerChange.bind(this)
        );

        this.refreshIntervalInputEl = document.querySelector("#refresh_interval");
        this.refreshIntervalInputEl.addEventListener(
            "input",
            this.handleRefreshIntervalChange.bind(this)
        );

        this.localStorageManager = new LocalStorageManager("mySettings");
        this.loadSettings();
    }

    handleBatteryLevelToggle() {
        if (this.showLevelBatteryEl.checked) {
            console.log("L'affichage de l'état de la batterie est activé.");
        } else {
            console.log("L'affichage de l'état de la batterie est désactivé.");
        }
        this.localStorageManager.setProperty(
            "showLevelBattery",
            this.showLevelBatteryEl.checked
        );
    }

    handleNetworkLatencyToggle() {
        if (this.showNetworkLatencyEl.checked) {
            console.log("L'affichage de la latence réseau est activé.");
        } else {
            console.log("L'affichage de la latence réseau est désactivé.");
        }
        this.localStorageManager.setProperty(
            "showNetworkLatency",
            this.showNetworkLatencyEl.checked
        );
    }

    handlePingServerChange() {
        const pingServer = this.pingServerInputEl.value;
        console.log(`Le serveur de ping est ${pingServer}.`);
        this.localStorageManager.setProperty("pingServer", pingServer);
    }

    handleRefreshIntervalChange() {
        const refreshInterval = this.refreshIntervalInputEl.value;
        console.log(`L'intervalle de rafraîchissement est ${refreshInterval} secondes.`);
        this.localStorageManager.setProperty("refreshInterval", refreshInterval);
    }

    loadSettings() {
        const showLevelBattery = this.localStorageManager.getProperty(
            "showLevelBattery"
        );
        const showNetworkLatency = this.localStorageManager.getProperty(
            "showNetworkLatency"
        );
        const pingServer = this.localStorageManager.getProperty("pingServer");
        const refreshInterval = this.localStorageManager.getProperty(
            "refreshInterval"
        );
        if (showLevelBattery !== undefined) {
            this.showLevelBatteryEl.checked = showLevelBattery;
        }
        if (showNetworkLatency !== undefined) {
            this.showNetworkLatencyEl.checked = showNetworkLatency;
        }
        if (pingServer !== undefined) {
            this.pingServerInputEl.value = pingServer;
        }
        if (refreshInterval !== undefined) {
            this.refreshIntervalInputEl.value = refreshInterval;
        }
    }
}

export { Settings };
