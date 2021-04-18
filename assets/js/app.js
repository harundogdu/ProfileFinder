/* class */
var profile = new Profile();
var ui = new UI();

/* consts */
const usernameInput = document.querySelector('#usernameInput');
const alert = document.querySelector('#alert');

/* keyup event */

usernameInput.addEventListener('keyup', (event) => {
    const username = event.target.value;

    if (username !== "") {           
        ui.showAlert(`${username} not found.`,'danger');                     
        ui.clear();
        profile.getProfile(username)
            .then((res) => {
                if (res.profile.length == 0) {

                } else {                    
                    ui.showAlert(`${username} found!`,'success');
                    ui.showProfile(res.profile[0]);
                    ui.showPosts(res.posts, res.profile[0]);
                    ui.showTodos(res.todos,res.profile[0]);
                }
            })
            .catch(err => console.log(err));
    }else{
        ui.clearAlert();
    }

});