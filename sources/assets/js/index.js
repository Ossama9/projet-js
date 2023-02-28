// Vérifie si l'API navigator.vibrate() est prise en charge
if ('vibrate' in navigator) {
    // Si le vibreur est activé, affiche un message
    if (navigator.vibrate) {
        document.getElementById("vibreur").innerHTML = "ON"

    } else {
        document.getElementById("vibreur").innerHTML = "OFF"
    }
} else {
    document.getElementById("vibreur").innerHTML = "NULL"
}

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
    clock.start()
    battery.init()
    latency.host = localStorageManager.getProperty("pingServer") ?? 'google.com'
    latency.measurePeriodicLatency()




