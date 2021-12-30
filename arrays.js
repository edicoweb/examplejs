// Example1 - Saludar Trabajador
var trabajadores =["juan", "Miguel", "Cris", "jaime"];

function saludarTrabajador(trabajadores){
    console.log(`Hola ${trabajadores[1]}`);
}

saludarTrabajador(trabajadores);

// Añadir Elemento al final del array

var frutas = ["Plátano", "Manzana", "Uva", "Cereza"];
var masFrutas = frutas.push("Fresa");

// Quitar el último elemto agregado

var frutas = ["Plátano", "Manzana", "Uva", "Cereza"];
var menosFrutas = frutas.pop("Fresa");

// Agrgar nuevo elemento al inicio del Array 

var frutas = ["Plátano", "Manzana", "Uva", "Cereza"];
var nuevaFruta = frutas.unshift(Naranja);

// Eliminar el primer elemento

var frutas = ["Plátano", "Manzana", "Uva", "Cereza"];
var BorrarFruta = frutas.shift("Naranja");

// Para saber la posición del elemento

var frutas = ["Plátano", "Manzana", "Uva", "Cereza"];
var posicionFruta = frutas.indexOf("Uva");