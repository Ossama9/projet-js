import {LocalStorageManager} from "./LocalStorageManager";

class Clock {
    constructor() {
        this.interval = null;
        this.mois = [
            "jan",
            "fev",
            "mar",
            "avr",
            "mai",
            "jun",
            "jul",
            "aou",
            "sep",
            "oct",
            "nov",
            "dec"
        ];
        this.jours = [
            "Dimanche",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi"
        ];
        this.timeEl = document.querySelector("#time")
        this.dateEl = document.querySelector("#date")
        this.localStorageManager = new LocalStorageManager('mySettings')
    }

    start() {
        this.interval = setInterval(() => {
            const date = new Date();
            const year = date.getFullYear();
            const monthEnStr = this.mois[date.getMonth()];
            const jourEnStr = this.jours[date.getDay()];
            const day = date.getDate();
            const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            let dateStr = ''
            let timeStr = []

            if (this.localStorageManager.getProperty("showHours") !== false) {
                timeStr.push(`${hours}`);
            }
            if (this.localStorageManager.getProperty("showMinutes") !== false) {
                timeStr.push(`${minutes}`);
            }
            if (this.localStorageManager.getProperty("showSeconds") !== false) {
                timeStr.push(`${seconds}`);
            }
            if (this.localStorageManager.getProperty("showDay") !== false) {
                dateStr = `${jourEnStr} ${day} `;
            }
            if (this.localStorageManager.getProperty("showMonth") !== false) {
                dateStr += `${monthEnStr} `;
            }
            if (this.localStorageManager.getProperty("showYear") !== false) {
                dateStr += `${year}`;
            }
            this.dateEl.innerHTML = dateStr;

            let timeFormat = ''
            for (const timeStrKey in timeStr) {
                if (timeStrKey < (timeStr.length - 1)) {
                    timeFormat += timeStr[timeStrKey] + ':'
                }
                else {
                    timeFormat += timeStr[timeStrKey]
                }
            }


            this.timeEl.innerHTML = timeFormat;
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
}

export {Clock}