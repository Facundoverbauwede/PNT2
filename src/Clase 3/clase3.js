
const personajes = [

{
    nombre: 'Bob esponja',
    tipo: 'Principal',
    edad: 22,
    id: 1,
    imagen: 'https://static.wikia.nocookie.net/spongebob/images/4/47/Spongebob.png/revision/latest?cb=20180818141844&path-prefix=es'
},
{
    nombre: 'Calamardo',
    tipo: 'Principal',
    edad: 40,
    id: 2,
    imagen:'https://static.wikia.nocookie.net/bobesponja/images/a/aa/Bob_Esponja_Calamardo.png/revision/latest?cb=20170412005838'
},
{
    nombre: 'Patricio estrella',
    tipo: 'Secundario',
    edad: 22,
    id: 3,
    imagen: 'https://www.metroecuador.com.ec/resizer/OFcFJzpNGq_xTj-pM4NSfjGYUZ4=/1024x1024/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/RBLDROQUJRGBXLP4WUIPMMSQTE.jpg'
}
]

/* const buscarPorId = () =>{
const id = parseInt(document.getElementById('id').value);
console.log(id);
const personaje = personajes.find(personaje => personaje.id === id);
console.log(personaje);
const row = `<p>${personaje.nombre}</p>`;
// document.getElementById("row").innerHTML = '';
document.getElementById("row").insertAdjacentHTML("beforeend", row); 
alert(personaje.nombre);
} */

const primera = () => {

    personajes.forEach(personaje => {
        
        const card = `<div class="card" style="width: 18rem;">
        <img src="${personaje.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${personaje.nombre}   </h5>
          <p class="card-text"> ${personaje.edad}     </p>
        </div>
      </div>`;
        document.getElementById('cards').insertAdjacentHTML("beforeend", card);
    })


}

const buscarPorId = () => {
    const id = parseInt(document.getElementById('id').value);

    const personaje = personajes.find(personaje => personaje.id === id);
    const row = personaje.insertarCard(id);
    document.getElementById("cards").innerHTML = '';
    document.getElementById("cards").insertAdjacentHTML("beforeend", row); 

}

const insertarCard = (id) => {
    const card = `<div class="card" style="width: 18rem;">
    <img src="${personaje.id.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${personaje.id.nombre}   </h5>
      <p class="card-text"> ${personaje.id.edad}     </p>
    </div>
  </div>`;
}

window.onload = primera();

