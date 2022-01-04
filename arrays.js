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

// Método de recorridos
// Nuestro ARRAY
var articulo = [
    { nombre: "telefono", costo: 1500 },
    { nombre: "laptop", costo: 3000 },
    { nombre: "TV", costo: 1000 },
    { nombre: "tablet", costo: 500 },
    { nombre: "audifono", costo: 100 },
    { nombre: "iphone", costo: 5000 }
];

// METODOS

// Metodo filter
var articulosFiltrados = articulo.filter(function(articulo){
    return articulo.costo <= 1000;
});

//Metodo map
var mapearArticulo = articulo.map(function(articulo){
    return articulo.nombre;
});

// Metodo find (true -> regresa si es false -> no regresa nada)
var encuentraArticulo = articulo.find(function(articulo){
    return articulo.nombre === "iphone";
});

// Metodo forEach 
articulo.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Para validar si es true o false
var articulosBaratos =  articulo.some(function(articulo){
    return articulo.costo <= 700;
});

