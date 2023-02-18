import {NetworkLatency} from "./NetworkLatency";


const latency = new NetworkLatency('https://www.google.com/')
latency.measurePeriodicLatency()
