// Funciones Declarativas*****************

// Example 1
function miFuntion(){
    return 5;
}

miFuntion();

// Example-Saludo

var Trabajador = "Juan"
function saludarTrabajador(Trabajador){
    console.log(`hola ${Trabajador}`);
}

saludarTrabajador(Trabajador);

// Example-Suma
var a = 4;
var b = 6;
function miSuma(a, b){
    var suma = a + b;
    console.log(suma);
}

miSuma(a,b);

// Funciones Expresivas************************

var miFuntion = function(a,b){
    return a+b;
}

miFuntion(1, 6);