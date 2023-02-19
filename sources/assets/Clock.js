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
        this.time = document.querySelector("#time")
        this.date = document.querySelector("#date")
    }

    start() {
        this.interval = setInterval(() => {
            const date = new Date();
            const year = date.getFullYear();
            const moisEnStr = this.mois[date.getMonth()];
            const jourEnStr = this.jours[date.getDay()];
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

            this.time.innerHTML = `${hours}:${minutes}:${seconds}`;
            this.date.innerHTML = `${jourEnStr} ${day} ${moisEnStr} ${year}`;
        }, 100);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
}
export {Clock}