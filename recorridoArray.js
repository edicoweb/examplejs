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

// **************Para buscar persona/articulo *********************
var buscarPersona = persona.find(function(persona){
    return persona.nombre === "huber";
});


// ******************Para imprimir solo nombres*******************
persona.forEach(function(persona){
    console.log(persona.nombre);
});

// *********************TRUE O FALSE (retorna true si hay personas menores)*************************
var personasMenores = persona.some(function(persona){
    return persona.edad > 18;
});