import {LocalStorageManager} from "./LocalStorageManager";

class Settings {
    constructor() {
        this.showLevelBatteryEl = document.querySelector("#show_level_battery")
        this.showDateEl = document.querySelector("#show-date")
        this.showLevelBatteryEl.addEventListener("change", this.handleBatteryLevelToggle.bind(this));
        this.showDateEl.addEventListener("change", this.handleDateToggle.bind(this));
        this.localStorageManager = new LocalStorageManager('mySettings')
        this.inputs = document.querySelectorAll('input');
        this.inputs.forEach(input => {
            input.addEventListener('change', this.handleInputs.bind(this));
        });
        this.loadSettings();
    }
    handleInputs() {
        this.localStorageManager.setProperty('showLevelBattery', this.showLevelBatteryEl.checked);
    }

    handleBatteryLevelToggle() {
        if (this.showLevelBatteryEl.checked) {
            console.log("L'affichage de l'état de la batterie est activé.");
        } else {
            console.log("L'affichage de l'état de la batterie est désactivé.");
        }
        this.localStorageManager.setProperty('showLevelBattery', this.showLevelBatteryEl.checked);
    }
    handleDateToggle() {
        if (this.showDateEl.checked) {
            console.log("L'affichage de showDate est activé.");
        } else {
            console.log("L'affichage de showDate est désactivé.");
        }
        this.localStorageManager.setProperty('showDate', this.showDateEl.checked);
    }

    loadSettings() {
        const showLevelBattery = this.localStorageManager.getProperty('showLevelBattery');
        const showDate = this.localStorageManager.getProperty('showDate');
        if (showLevelBattery !== undefined) {
            this.showLevelBatteryEl.checked = showLevelBattery;
        }
        if (showLevelBattery !== undefined) {
            this.showDateEl.checked = showDate;
        }
    }
}

export {Settings}