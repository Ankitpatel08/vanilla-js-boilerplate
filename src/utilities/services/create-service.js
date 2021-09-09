import request from './service-adapter';

export default function createService(fn) {
    return async function () {
        const config = fn(...arguments);
        return request(config);
    };
}
