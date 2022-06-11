let data;

let drawData = () => {
    if (data.length > 0) {

    }
}

let ajax = () => {

    const url = 'https://jsonplaceholder.typicode.com/users';

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // console.log(xhr.responseText);
                data = xhr.responseText;
                console.log(data);
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