class LocalStorageManager {
    constructor(storageKey) {
        this.storageKey = storageKey;
        this.data = this.load() || {};
    }

    load() {
        const storedData = localStorage.getItem(this.storageKey);
        return storedData ? JSON.parse(storedData) : null;
    }

    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    setProperty(key, value) {
        this.data[key] = value;
        this.save();
    }

    getProperty(key) {
        return this.data[key];
    }
}


export {LocalStorageManager}