import './services/service-adapter';

class utilities {
    constructor() {
        global.utilities = this;
    }

    async getService(item) {
        const result = await import(`./services/${item}`);

        return result.default;
    }

    async callService(serviceName, ...params) {
        const service = await this.getService(serviceName);
        let result;

        try {
            result = await service(...params);
        } catch (err) {
            console.log('service error');
        }

        return result;
    }

    async getModule(module) {
        const result = await import(`./modules/${module}`);

        return result.default || result;
    }
}

new utilities();
