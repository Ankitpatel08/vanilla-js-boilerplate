import '../scss/home.scss';

class Home {
    constructor() {
        console.log('Home App');

        (async () => {
            const postData = await global.utilities.callService('getPosts');

            console.log('data returned--->', postData);

            const createdPost = await global.utilities.callService('createPost', {
                title: 'test',
                body: 'lorem ipsum',
                userId: 1,
            });

            console.log('post created--->', createdPost);
        })();
    }
}

new Home();
