var persona = [
    {nombre: "juan", edad: 19},
    {nombre: "percy", edad: 15},
    {nombre: "huber", edad: 20},
    {nombre: "reyna", edad: 16},
    {nombre: "dina", edad: 10},
    {nombre: "edy", edad: 25}
];

// ***************imprimir solo nombres**************

var filtrarPorNombre = persona.map(function(persona){
    return persona.nombre;
});

// *************Filtrar por Edad****************
var filtrarPorEdad = persona.filter(function(persona){
    return persona.edad < 18;
});    