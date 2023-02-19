import {Settings} from "./Settings";
import {BatteryManager} from "./Battery";
import {Clock} from "./Clock";
import {NetworkLatency} from "./NetworkLatency";


const settings = new Settings();
const clock = new Clock();
const latency = new NetworkLatency();
const battery = new BatteryManager();

clock.start()
battery.init()
latency.host = 'google.com';
latency.measurePeriodicLatency()
