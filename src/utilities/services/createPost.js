import createService from './create-service';

export default createService(post => {
    return {
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'Content-type': 'application/json; charset-UTF-8',
        },
        method: 'POST',
        data: post,
        parser: (data) => {
            return data;
        },
    };
});
