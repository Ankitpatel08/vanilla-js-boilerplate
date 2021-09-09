import createService from './create-service';

export default createService(() => {
    return {
        url: 'https://jsonplaceholder.typicode.com/posts',
        parser: (data) => {
            return data.filter(post => post.userId === 1);
        },
    };
});
