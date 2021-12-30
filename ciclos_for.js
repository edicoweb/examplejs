// Loop saludar clientes 1

var clientes = ["Juan", "Pedro", "Julian", "cris"];

function saludarClientes(clientes){
    console.log(`Hola ${clientes} Bienvenido a Qetal!`);
}

for(var i=0; i<clientes.length; i++){
    saludarClientes(clientes[i]);
}

// Loop saludar clientes 2

var clientes = ["Juan", "Pedro", "Julian", "cris"];

function saludarClientes(clientes){
    console.log(`Hola ${clientes} Bienvenido a Qetal!`);
}

for(var cliente of clientes){
    saludarClientes(cliente);
}