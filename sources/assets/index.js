import {Clock} from "./Clock";
import {BatteryManager} from "./battery";
import {NetworkLatency} from "./NetworkLatency";

const clock = new Clock();
const battery = new BatteryManager();
const networkLatency = new NetworkLatency()





networkLatency.measurePeriodicLatency()
battery.init();
clock.start();
