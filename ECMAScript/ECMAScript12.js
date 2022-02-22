/************Remplazar Palabras */
const texto = "javaScript es maravilloso, con javaScript puedo crear el futuro de la web";
//Antes
const remplazarText = texto.replace('javaScript', 'Phyton');
//Ahora
const remplazarNewText = texto.replaceAll('javaScript', 'Phyton');
console.log(remplazarText);
console.log(remplazarNewText);


/***************METODOS PRIVADOS */

//Normal
class Mensaje{
    show(val){
        console.log(val);
    };
}
const saludo = new Mensaje();
saludo.show('hola');

//Convirtiendo a privado
class Mensaje{
    #show(val){
        console.log(val);
    };
}
const saludo = new Mensaje();
saludo.show('hola');

//*******************OPERADORES */
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);