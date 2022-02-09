// Example1
var clientes = ["Juan", "Maria", "Reyna", "Javier"];

function saludarClientes(clientes){
    console.log(`Hola ${clientes}`);
}


while(clientes.length > 0){
    console.log(clientes);
    var cliente = clientes.shift();
    saludarClientes(cliente);
}