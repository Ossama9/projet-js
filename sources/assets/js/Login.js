import {LocalStorageManager} from "./LocalStorageManager";

const localStorageManager = new LocalStorageManager('mySettings')


const delta = (Date.now() - localStorageManager.getProperty('createdAt')) / 1000;
if (localStorageManager.getProperty('login') === undefined) {
    const password = prompt('Vous etes nouveau, entrer votre mdp que vous souhaitez')
    localStorageManager.setProperty('createdAt', Date.now())
    localStorageManager.setProperty('login', password)
}
else if (localStorageManager.getProperty('login') && delta > 3600) {
    const password = prompt('Entrer votre mdp')
    let isOk = true
    if (password !== localStorageManager.getProperty('login')) {
        let count = 0;
        isOk = false
        while (isOk === false && count < 3) {
            const password = prompt('Vous avez' + (3 - count) + ' tentatives : entrer votre mdp ')
            isOk = password === localStorageManager.getProperty('login')
            count++
        }

        if (!isOk){
            location.replace('about:blank');
        }
    }
    if (isOk){
        localStorageManager.setProperty('createdAt', Date.now())
    }
}

