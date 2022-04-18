// function sumar(Numero1, Numero) {
// return Numero1+Numero;
// }

const suma = (Numero1, Numero2) => {
    return Numero1+Numero2;
}

console.log(suma(4,5));

console.log("Hello world");

const  person = {
    name:'Facundo',
    surname:'Verbauwede',
    age:23,
    hobbies:[
        {
            name:'Plays basketball🏀',
            time: '2 hours'
        },
        {
            name: 'Listen music🎶',
            time: '1 hour'
        }
    ]
}

console.log(person)
console.log(person.name)
console.log(person.hobbies)

// let number1 = parseInt(prompt('please insert one number'));
// console.log(number1);

const numero1 = parseInt(prompt('Ingrese un numero'));
const numero2 = parseInt(prompt('Ingrese otro numero'));
const signo = prompt('Ingrese la operacion a realizar (+, -, /, *) ');

signo === '+' ? console.log(numero1+numero2) : null;
signo === '-' ? console.log(numero1-numero2) : null;
signo === '/' ? console.log(numero1/numero2) : null;
signo === '*' ? console.log(numero1*numero2) : null;

/* if (signo === '+'){
    const suma = numero1 + numero2;
    alert('El resultado es: ' + suma);
}else if(signo === '-'){
    alert(numero1-numero2);
}else if (signo === '/'){
    alert(numero1/numero2);
}else if (signo === '*'){
    alert(numero1 * numero2);
}

 */

