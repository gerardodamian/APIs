const aplicacion = document.querySelector('.container')
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')

const url = "https://jsonplaceholder.typicode.com/users";
console.log(`${url}/${id}`);

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const name = document.createElement('p')
    name.innerHTML = data.name
    const email = document.createElement("p");
    email.innerHTML = data.email
    const username = document.createElement('p')
    username.innerHTML = data.username
    const phone = document.createElement("p");
    phone.innerHTML = data.phone
    const address = document.createElement("p");
    address.innerHTML = data.address.street
    aplicacion.appendChild(name)
    aplicacion.appendChild(email);
    aplicacion.appendChild(username);
    aplicacion.appendChild(phone);
    aplicacion.appendChild(address);
})

.catch(err => console.log(err))

