import {Settings} from "./Settings";
import {BatteryManager} from "./Battery";
import {Clock} from "./Clock";
import {NetworkLatency} from "./NetworkLatency";
import {LocalStorageManager} from "./LocalStorageManager";


const localStorageManager = new LocalStorageManager('mySettings')


const settings = new Settings();
const clock = new Clock();
const latency = new NetworkLatency();
const battery = new BatteryManager();

settings.bc.onmessage = (event) => {
    location.reload()
}

clock.start()
battery.init()
latency.host = localStorageManager.getProperty("pingServer") ?? 'google.com'
latency.measurePeriodicLatency()
