class NetworkLatency {
    constructor(host) {
        this.host = host;
        this.latency = document.querySelector("#latency")
    }

    getLatency() {
        const start = new Date().getTime();
        return fetch(this.host, {
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8000'
            }
        }).then(() => {
                const end = new Date().getTime();
                return end - start;
            });
    }
    measurePeriodicLatency(){
        setInterval(async ()=>{
            this.latency.innerHTML = await this.getLatency() + ' ms'
        }, 1000);
    }
}


export {NetworkLatency}