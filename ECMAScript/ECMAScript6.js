//Espaciado**************************************************************************

let saludo = "Welcome to";
let town = "Peruvian";

document.getElementById("conexion").innerHTML = `${saludo} ${town}`;

//Multilinea************************************************************************************

let parrafito = `Empresas de Tecnologia: 
Facebook
Google
Twiter`;
document.getElementById("multilinea").innerText = `${parrafito }`;

//*********************************************************************************************

let person = {
    name: 'edicoweb',
    age: 25,
    country: 'Peruvian'
}
let {name, age, country} = person;
document.getElementById("objeto").innerHTML = `${name} ${age}`;


//******************************************************************************************************

let equipo1 = ['Edy', 'Angel', 'Juan'];
let equipo2 = ['Eliza', 'Rosmery', 'Dina'];

let totalPersona = ['Marin', ...equipo1, ...equipo2];
document.getElementById("arrays").innerText = `${totalPersona}`;

//********************************************************************************************************

var nombre = 'edy';
var edad = 25;
objeto = {nombre, edad};
// console.log(nombre, edad);
document.getElementById("objeto1").innerText = `${objeto.nombre} ${objeto.edad}`;

//ARROW FUNCTION******************************************************************************************

const personitas = [
    {name: "edil", age: 25},
    {name: "juan", age: 32}
];

let listaPersonitas = personitas.map(item => document.getElementById("function").innerHTML = `FUNCIONES -> ${item.name}`);

//************01  */

let listaPersonitas = personitas.map(item => console.log(item.name));

//***********02 */
const listaPersonitas2 = (name, age) => {
    ...
}

//***********03 */
const listaPersonitas3 = name => {
    ...
}

//****** ejemplo 04 */

var personitas = [
    {name: "edil", age: 25},
    {name: "juan", age: 32},
];
var listaPersonitas = personitas.map( function(item) {
       var {name, age} =  item;
        return age;
});

//PROMESAS DE JS***********************************************************************************

const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('Ups!');
        }
    });
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));

// CLASES *********************************************************************************************

//Constructor
class calculator{
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
 //Metodo
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2, 5));

//  GENERATOR*********************************************************************************************

function* helloWorld() {
    if(true){
        yield 'hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);