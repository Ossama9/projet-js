import {NetworkLatency} from "./NetworkLatency";
import {BatteryManager} from "./battery";


const latency = new NetworkLatency('https://www.google.com/')
latency.measurePeriodicLatency()

const batteryManager = new BatteryManager();
batteryManager.init();
