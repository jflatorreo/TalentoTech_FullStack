class Configuration {
    constructor() {
        if (Configuration.instance) {
            return Configuration.instance;
        }
        this.configurations = {};
        Configuration.instance = this;
    }

    static getInstance() {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance;
    }

    setConfig(key, value) {
        this.configurations[key] = value;
    }

    getConfig(key) {
        return this.configurations[key];
    }
}

// Uso del Singleton
const config1 = Configuration.getInstance();
config1.setConfig('theme', 'dark');

const config2 = Configuration.getInstance();
console.log(config2.getConfig('theme'));  // Output: dark
