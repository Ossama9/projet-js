class NetworkLatency {
    constructor(host) {
        this.host = host;
    }
    getLatency() {
        const start = new Date().getTime();

        return fetch(this.host)
            .then(() => {
                const end = new Date().getTime();
                return end - start;
            });
    }
}

const networkLatency = new NetworkLatency('facebook.com');

const latency = await networkLatency.getLatency()

console.log(`Latence réseau: ${latency} ms`);
