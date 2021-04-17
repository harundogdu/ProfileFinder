class Profile {

    constructor() {
        this.clientId = "";
        this.clientServer = "";
    }

    async getProfile(username) {
        let profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        let profile = await profileResponse.json();

        let postsRespone = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${profile[0].id}`);
        let posts = await postsRespone.json();
        return {
            profile,
            posts
        }
    }
}