class UI {
    constructor() {
        this.result = document.querySelector('#result');
    }

    showProfile(data) {
        let html =
            `
               <div class="col-md-2 text-center justify-content-center">
                    <img src="https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" class="img-thumbnail">
                    <h5 class="app-title">${data.username}</h5>
               </div> 
               <div class="col-md-10 ">
                    <h5 class="app-title text-center">About of ${data.username}</h5>  
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
            `;
        this.result.innerHTML = html;
    }    
}