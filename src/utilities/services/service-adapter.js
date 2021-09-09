export default function request(options) {
    const defaultOptions = {
        dataType: 'json',
        method: 'GET',
    };

    const requestOptions = {
        ...defaultOptions,
        ...options,
    };

    const fetchOptions = {
        url: requestOptions.url,
        configuration: {
            method: requestOptions.method,
            headers: requestOptions.headers,
        },
    };

    if (fetchOptions.configuration.method.toLowerCase() === 'post') {
        if (requestOptions.data !== undefined) {
            fetchOptions.configuration.body = JSON.stringify(requestOptions.data);
        }
    }

    const requestPromise = new Promise((resolve, reject) => {
        fetch(fetchOptions.url, fetchOptions.configuration)
            .then(response => response.json())
            .then(response => {
                if (typeof requestOptions.parser === 'function') {
                    response = requestOptions.parser(response);
                }
                resolve(response);
            })
            .catch(err => reject(err));
    });

    return requestPromise;
}
