class UI {
    constructor() {
        this.result = document.querySelector('#result');
        this.posts = document.querySelector('#posts');
        this.alert = document.querySelector('#alert');
        this.todos = document.querySelector('#todos');
    }

    showProfile(data) {
        let html =
            ` 
            <div class="container"> 
                <div class="row"><div class="col-md-12"><h5 class="app-title text-center">About of ${data.username}</h5><hr></div></div>
                <div class="row">
                <div class="col-md-2 text-center justify-content-center">
                        <img src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" class="img-thumbnail">
                        <h5 class="app-title">${data.username}</h5>
                </div> 
                <div class="col-md-10">                   
                        <ul class="list-group my-2">
                            <li class="list-group-item"><span class="font-weight-bold">Person Name : </span>${data.name}</li>
                            <li class="list-group-item"><span class="font-weight-bold">Person Username : </span>${data.username}</li>
                            <li class="list-group-item"><span class="font-weight-bold">Person Email : </span>${data.email}</li>
                            <li class="list-group-item">
                            <span class="font-weight-bold">Person Adress :</span> 
                            ${data.address.street + " " + data.address.suite + " " + data.address.city + " " + data.address.zipcode}
                            </li>
                            <li class="list-group-item"><span class="font-weight-bold">Person Phone : </span>${data.phone}</li>
                            <li class="list-group-item"><span class="font-weight-bold">Person Website : </span>${data.website}</li>
                            <li class="list-group-item">
                            <span class="font-weight-bold">Person Company :</span>
                            ${data.company.name + " " + data.company.catchPhrase + " " + data.company.bs}
                            </li>
                        </ul>
                </div> 
                </div> 
            </div>
            `;
        this.result.innerHTML = html;
    }

    showPosts(data, profile) {
        let html =
            `<div class="container">
                <div class="row">
                    <div class="col-md-12 justify-content-center">
                    <h5 class="app-title text-center">Posts of ${profile.username}</h5><hr>
                    </div>
                </div>
                <div class="row">
            `;
        data.forEach(post => {
            html +=
                `
                    <div class="col-md-4 my-2">
                        <div class="card">
                            <div class="card-header bg-info font-weight-bold text-white">${post.title}</div>
                            <div class="card-body">
                                <p class="lead">${post.body}</p>
                            </div>
                        </div>
                    </div>
                `;
        });
        html += '</div></div>';
        this.posts.innerHTML += html;
    }

    showTodos(data,profile){
        let html =
            `<div class="container">
                <div class="row">
                    <div class="col-md-12 justify-content-center">
                    <h5 class="app-title text-center">Todos of ${profile.username}</h5><hr>
                    </div>
                </div>
                <div class="row">
            `;
        data.forEach(todo => {
            html +=
                `
                    <div class="col-md-4 my-2">
                        <div class="card">
                            <div class="card-header font-weight-bold text-white ${(todo.completed) == true ? "bg-success" : "bg-danger"}">${(todo.completed) == true ? "Completed" : "Not Complete"}</div>
                            <div class="card-body">
                                <p class="lead">${todo.title}</p>
                            </div>
                        </div>
                    </div>
                `;
        });
        html += '</div></div>';
    this.todos.innerHTML = html;
    }


    showAlert(message, alert) {
        let html = `<div class="text-${alert}">${message}</div>`;
        this.alert.innerHTML = html;
    }

    clear() {
        this.result.innerHTML = "";
        this.posts.innerHTML = "";        
        this.todos.innerHTML = "";    
    }
    clearAlert() {
        this.alert.innerHTML = "";
    }


}