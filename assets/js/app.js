/* class */
var profile = new Profile();
var ui = new UI();

/* consts */
const usernameInput = document.querySelector('#usernameInput');

/* keyup event */

usernameInput.addEventListener('keyup', (event) => {
    const username = event.target.value;

    if (username !== "") {
        profile.getProfile(username)
            .then((res) => {
                if (res.profile.length == 0) {

                } else {
                    ui.showProfile(res.profile[0]);
                    ui.showPosts(res.posts);
                }
            })
            .catch(err => console.log(err));
    }

});