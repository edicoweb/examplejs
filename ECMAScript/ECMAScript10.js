/****PRFUNDIDAD ARRAY */
let array = [1,2,3, [4,5,6,[7,8,9]]];
console.log(array.flat(2))

/*** MAPEAR*/
let array = [1, 2, 3];
console.log(array.flatMap(value => [value, value*2]));

// Quitar espacio al inicio o final de la palabra
let nombre =  "     edicoweb";
console.log(nombre);
//console.log(nombre.trimStart());
//console.log(nombre.trimEnd());


//Convertir Array a Objeto con fromEntries
let student = [['name', 'edicoweb'], ['age', 25], ['country', 'Peruvian']];
console.log(Object.fromEntries(student));