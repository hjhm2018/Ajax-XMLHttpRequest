let data = [];

let container = document.getElementById('container');

function drawData() {
    if (data.length > 0) {
        data.forEach(item => {
            container.innerHTML += `
                <div class="box">
                    <p><i class="fa fa-user"></i> <b>Name:</b> ${item.name}</p>
                    <p><i class="fa fa-envelope-o"></i> <b>Email:</b> ${item.email}</p>
                    <p><i class="fa fa-map-pin"></i> <b>Address:</b> ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}</p>
                    <p><i class="fa fa-phone"></i> <b>Phone:</b> ${item.phone}</p>
                    <p><i class="fa fa-globe"></i> <b>Website:</b> ${item.website}</p>
                </div>
            `
        })
    }
}

let ajax = () => {

    const url = 'https://jsonplaceholder.typicode.com/users';

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                data = JSON.parse(xhr.responseText);

                drawData();
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = () => {
        console.error(xhr.statusText);
    };
    xhr.send(null);
}

ajax();


