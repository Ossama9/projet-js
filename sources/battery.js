

class BatteryManager {
    constructor() {
        this.battery = null;
        this.batteryLevel = document.querySelector(".battery_level");
        this.chargingBar = document.querySelector(".charging_bar");
        this.chargingIcon = document.querySelector(".charging_icon");
        this.otherInfo = document.querySelector(".other_info");
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
        this.batteryLevel.textContent = this.getChargeLevel();
        this.chargingBar.style.width = this.getChargeLevel();
    }
    updateDischargingInfo() {
        if (this.getDisChargingTime()) {
            this.getDisChargingTime().textContent = `${parseInt(
                this.getDisChargingTime()
            )} minutes`;
            this.otherInfo.style.display = "flex";
        } else {
            this.otherInfo.style.display = "none";
        }
    }
    updateChargeInfo() {
        if (this.isInCharge()) {
            console.log(this.chargingBar)
            this.chargingBar.style.animationIterationCount = "infinite";
            this.chargingIcon.style.display = "inline-flex";
            this.otherInfo.style.display = "none";
        } else {
            this.chargingIcon.style.display = "none";
            this.otherInfo.style.display = "inline-flex";
            this.chargingBar.style.animationIterationCount = "initial";
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

const batteryManager = new BatteryManager();
batteryManager.init();