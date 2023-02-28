import {LocalStorageManager} from "./LocalStorageManager";

class BatteryManager {
    constructor() {
        this.battery = null;
        this.batteryLevelEl = document.querySelector(".battery_level");
        this.chargingBarEl = document.querySelector(".charging_bar");
        this.chargingIconEl = document.querySelector(".charging_icon");
        this.otherInfoEl = document.querySelector(".other_info");
        this.localStorageManager = new LocalStorageManager('mySettings')

    }


    init() {
        navigator.getBattery().then((battery) => {
            this.battery = battery;
            this.updateAllBatteryInfo();
            this.addBatteryEventListeners();
        });
    }

    updateAllBatteryInfo() {
        this.updateChargeInfo();
        this.updateLevelInfo();
        this.updateDischargingInfo();
    }

    updateLevelInfo() {
        if (this.localStorageManager.getProperty("showLevelBattery")) {
            this.batteryLevelEl.textContent = this.getChargeLevel();
        }
        this.chargingBarEl.style.width = this.getChargeLevel();

    }

    updateDischargingInfo() {
        if (this.getDisChargingTime()) {
            this.otherInfoEl.style.display = "flex";
        } else {
            this.otherInfoEl.style.display = "none";
        }
    }

    updateChargeInfo() {
        if (this.isInCharge()) {
            this.chargingBarEl.style.animationIterationCount = "infinite";
            this.chargingIconEl.style.display = "inline-flex";
            this.otherInfoEl.style.display = "none";
        } else {
            this.chargingIconEl.style.display = "none";
            this.otherInfoEl.style.display = "inline-flex";
            this.chargingBarEl.style.animationIterationCount = "initial";
        }
    }

    addBatteryEventListeners() {
        this.battery.addEventListener("chargingchange", () => {
            this.updateAllBatteryInfo();
        });

        this.battery.addEventListener("levelchange", () => {
            this.updateAllBatteryInfo();
        });

        this.battery.addEventListener("dischargingtimechange", () => {
            this.updateAllBatteryInfo();
        });
    }

    getChargeLevel() {
        this.chargeLevel = this.battery.level * 100 + '%';
        return this.chargeLevel;
    }

    isInCharge() {
        this.inCharge = this.battery.charging;
        return this.inCharge;
    }

    getDisChargingTime() {
        this.disChargingTime = this.battery.dischargingTime / 60;
        if (this.disChargingTime === Infinity)
            return false
        return this.disChargingTime
    }


}

export {BatteryManager}
