if ('getBattery' in navigator) {
    navigator.getBattery().then(function (battery) {
        const test = new Battery(battery)
        console.log("getChargeLevel " + test.getChargeLevel())
        console.log("getChargingTime " + test.getChargingTime())
        console.log("isInCharge " + test.isInCharge())
        console.log("getDisChargingTime " + test.getDisChargingTime())
        test.getBatteryStatus()
        console.log(battery)
        // battery.addEventListener('chargingchange', function() {
        //     if (battery.charging) {
        //         console.log("La batterie est en train de se charger");
        //     } else {
        //         console.log("La batterie n'est pas en train de se charger");
        //     }
        // });

        battery.addEventListener('chargingtimechange', function () {
            console.log("Le temps de charge restant est de " + battery.chargingTime + " minutes");
        });

        battery.addEventListener('dischargingtimechange', function () {
            console.log("Le temps de décharge restant est de " + battery.dischargingTime + " minutes");
        });
    });
} else {
    console.log("L'option batterie n'est pas pris en charge par votre navigateur")
}

class Battery {
    battery;
    chargeLevel;
    inCharge;
    chargingTime;
    disChargingTime;

    constructor(battery) {
        this.battery = battery;
    }

    getChargeLevel() {
        this.chargeLevel = this.battery.level * 100 + '%';
        return this.chargeLevel;
    }

    isInCharge() {
        this.inCharge = this.battery.charging;
        return this.inCharge;
    }

    // temps qui reste pour la batterie soit dechargé

    /**
     * temps qui reste pour la batterie soit chargé
     * @returns {*}
     */
    getChargingTime() {
        this.chargingTime = this.battery.chargingTime / 60;
        if (this.chargingTime === Infinity) {
            return -1
        }
        return this.chargingTime
    }

    /**
     * temps qui reste pour la batterie soit dechargé
     * @returns {*}
     */
    getDisChargingTime() {
        this.disChargingTime = this.battery.dischargingTime / 60;
        return this.disChargingTime
    }

    getBatteryStatus() {
        this.battery.addEventListener('chargingchange', () => {
            if (this.battery.charging) {
                console.log("La batterie est en train de se charger");
            } else {
                console.log("La batterie n'est pas en train de se charger");
            }
        })
        this.battery.addEventListener('chargingtimechange', () => {
            if (this.isInCharge() === -1) {
                console.log("Le temps de charge  test restant est de " + this.getChargingTime() + " minutes");
            }
        });
        this.battery.addEventListener('dischargingtimechange', () => {
            if (!this.isInCharge()) {
                console.log("Le temps de decharge test restant est de " + this.getDisChargingTime() + " minutes");
            }
        });
        this.battery.addEventListener('level', () => {
            console.log("niveau de batterie est:" + this.getChargeLevel())
        });
    }
}