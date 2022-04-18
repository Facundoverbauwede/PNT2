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

/*  let number1 = parseInt(prompt('please insert one number'));
console.log(number1);

const numero1 = parseInt(prompt('Ingrese un numero'));
const numero2 = parseInt(prompt('Ingrese otro numero'));
const signo = prompt('Ingrese la operacion a realizar (+, -, /, *) ');

signo === '+' ? console.log(numero1+numero2) : null;
signo === '-' ? console.log(numero1-numero2) : null;
signo === '/' ? console.log(numero1/numero2) : null;
signo === '*' ? console.log(numero1*numero2) : null;


if (signo === '+'){
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


const usuarios = [
    {
        id: 1,
        username: 'facundo',
        pass : '1234'
    },
    {
        id: 2,
        username: 'verbauwede',
        pass: '1234'
    }
];

const login = () => {
    console.log("se ejecuta login");
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;

    const logged = usuarios.find(usuario => usuario.username === username && usuario.pass === pass);
    // for(let i = 0; i < usuarios.length; i++) {
    //     if(usuarios[i].username === username && usuarios[i].pass === pass){
    //         logged = usuario[i];
    //         break;
    //     }
    // } == .find

    //forEach, find, filter, map, reduce

    // usuarios.forEach(usuario => {
    //     usuario.username === username && usuario.pass === pass ? logged = true : null;
    // })

    // let i = 0;
    // while(i < usuarios.length && logged === false) {
    //     if(username === usuarios[i].username && pass === usuarios[i].pass) {
    //         logged = true;
    //     }
    //     i++;
    // }
    logged ? console.log("Ingreso correcto") : console.log("usuario o contraseña incorrectas");
    console.log(username, pass);
}