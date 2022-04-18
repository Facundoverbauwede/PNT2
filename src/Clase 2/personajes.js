const series = [
    {
        nombre: 'Lucifer',
        id: '1',
        genero: 'comedia',
        anio: 2016
    },
    {
        nombre: 'Dragon Ball Z',
        id: '2',
        genero: 'anime',
        anio: 1984

    },
    {
        nombre: 'Vikingos',
        id: '3',
        genero: 'drama',
        anio: 2013

    },
    {
        nombre: 'Samurai x',
        id: '4',
        genero: 'anime',
        anio: 1998

    },
    {
        nombre: 'La maldición de Hill house',
        id: '5',
        genero: 'terror',
        anio: 2018

    }
]

console.log(series);

const nombreSeries = series.map(serie => serie.nombre);
console.log(nombreSeries);

const tipoSeries = series.map(serie => serie.genero);
console.log(tipoSeries);

let acumuladorAnios = (series.reduce((a, b) => a + b, 0))

let promedioAnios = acumuladorAnios / series.length

console.log(promedioAnios);


