
const personajes = [

{
    nombre: 'Bob',
    tipo: 'Principal',
    edad: 22,
    id: 1
},
{
    nombre: 'Calamardo',
    tipo: 'Principal',
    edad: 40,
    id: 2
},
{
    nombre: 'Patricio',
    tipo: 'Secundario',
    edad: 22,
    id: 3
}
]

const buscarPorId = () =>{
const id = parseInt(document.getElementById('id').value);
console.log(id);
const personaje = personajes.find(personaje => personaje.id === id);
console.log(personaje);
const row = `<p>${personaje.nombre}</p>`;
document.getElementById("row").innerHTML = '';
document.getElementById("row").insertAdjacentHTML("beforeend", row); 
alert(personaje.nombre);
}

const primera = () => {
    console.log('Me ejecuto cuando arranca la página')
}

window.onload = primera();

