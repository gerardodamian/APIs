//con async await

const aplicacion = document.querySelector(".container");

const url = "https://jsonplaceholder.typicode.com/users";

async function obtenerUsuarios() {
    try {
        const res = await fetch(url);
        const data = await res.json();

        data.forEach((usuario) => {
            const p = document.createElement("p");
            p.setAttribute("id", usuario.id);

            p.innerHTML = usuario.name;
            p.addEventListener("click", function () {
                window.location.href = `./usuario.html?id=${usuario.id}`;
            });

            aplicacion.appendChild(p);
        });
    } catch (err) {
        console.log(err);
    }
}

obtenerUsuarios();

//con .then

//const aplicacion = document.querySelector(".container");

//const url = "https://jsonplaceholder.typicode.com/users";

//fetch(url)
//.then(res => res.json())
//.then(data => {
//data.forEach(usuario => {
// const p = document.createElement('p');
//p.setAttribute('id', usuario.id)

//p.innerHTML = usuario.name;
// p.addEventListener('click', function(){
//    window.location.href = `./usuario.html?id=${usuario.id}`
// })

// aplicacion.appendChild(p);
//console.log(data)
// });
//})
//.catch(err => console.log(err))
