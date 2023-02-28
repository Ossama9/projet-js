import {LocalStorageManager} from "./LocalStorageManager";

class NetworkLatency {
    _host
    set host(value) {
        this._host = 'https://www.' + value;
    }

    constructor() {
        this.latencyEl = document.querySelector("#latency")
        this.iconLatencyEl = document.querySelector("#icon-latency")
        this.localStorageManager = new LocalStorageManager('mySettings')
        this.iconLatencyEl.style.display = 'none'
    }


    getLatency() {
        const start = new Date().getTime();
        return fetch(this._host, {
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8000'
            }
        }).then(() => {
            const end = new Date().getTime();
            return end - start;
        });
    }


    measurePeriodicLatency() {
        if (this.localStorageManager.getProperty("showNetworkLatency")) {
            this.iconLatencyEl.style.display = 'block'
            setInterval(async () => {
                const latency = await this.getLatency()
                this.latencyEl.innerHTML = latency + ' ms'
            }, this.localStorageManager.getProperty("refreshInterval") ?? 1000);
        }
    }
}


export {NetworkLatency}