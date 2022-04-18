const personajes = [
    {
        id: 1,
        nombre: 'bob',
        tipo : 'principal',
        edad: 22,
        imagen: 'https://cdn.sincroguia.tv/uploads/series/bob-esponja-poster-13047_V.jpg'
    },
    {
        id: 2,
        nombre: 'calamardo',
        tipo : 'principal',
        edad: 40,
        imagen: 'https://wikidat.com/img/calamardo-tentaculos-1ffaa2fed1bf0eda39bd62d521f3fc29.jpg'
    },
    {
        id: 3,
        nombre: 'patricio estrella',
        tipo : 'secundario',
        edad: 22,
        imagen: 'https://www.metroecuador.com.ec/resizer/OFcFJzpNGq_xTj-pM4NSfjGYUZ4=/1024x1024/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/RBLDROQUJRGBXLP4WUIPMMSQTE.jpg'
    },
    {
        id: 4,
        nombre: 'Goku',
        tipo : 'principal',
        edad: 22,
        imagen: 'https://static.wikia.nocookie.net/personajes-de-ficcion-database/images/d/d9/Goku_DBZ_Base.png/revision/latest?cb=20201216115006&path-prefix=es'
    },
    {
        id: 5,
        nombre: 'Kenshin',
        tipo : 'principal',
        edad: 22,
        imagen: 'https://static.wikia.nocookie.net/death-battle-en-espanol/images/7/70/Kenshin.png/revision/latest?cb=20180313175953&path-prefix=es'
    },
    {
        id: 6,
        nombre: 'squirtle',
        tipo : 'secundario',
        edad: 22,
        imagen: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png'
    },
    {
        id: 7,
        nombre: 'bombon',
        tipo : 'principal',
        edad: 22
    },
    {
        id: 8,
        nombre: 'patricio estrella',
        tipo : 'secundario',
        edad: 22
    }
];

const searchById = () => {
    const id = parseInt(document.getElementById('id').value);
    const personaje = personajes.find(personaje => personaje.id == id);
    const row = `<p>${personaje.nombre}</p>`;
    document.getElementById("row").innerHTML = '';
    document.getElementById("row").insertAdjacentHTML('beforeend', row);
    alert(personaje.nombre);
}

const primera = () => {
    console.log("me ejecuto cuando se carga la pagina");
    
    console.log(personajes);

    const names = personajes.map(personaje => personaje.nombre);
    console.log(names);

    const promedio = (personajes.reduce((valAnterior, valActual) => valAnterior + valActual.edad, 0))/personajes.length;
    console.log(promedio);

    const principales = personajes.filter(personaje => personaje.tipo === 'principal');
    console.log(principales);
}

window.onload = primera();