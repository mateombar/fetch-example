const main = document.querySelector('#main');
const myRequest = new Request('https://jsonplaceholder.typicode.com/users/');

const laoding = document.createElement('p');
laoding.innerText = 'Loading...';

const errorMessage = document.createElement('p');
main.appendChild(laoding);

function getUsers() {
    fetch(myRequest)
        .then(response => {
            console.log(response.status);
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
        .then(data => userList(data))
        .catch(e => {
            main.removeChild(laoding);
            errorMessage.innerText = e.message;
            main.appendChild(errorMessage);
        })


}

function userList(users) {
    console.log(users);
    const ul = document.createElement('ul');
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name
        ul.appendChild(li)
    });
    main.removeChild(laoding);
    main.appendChild(ul)
}

getUsers();