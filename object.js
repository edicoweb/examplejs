//Example1
var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

// Example2
var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleAuto: function(){
        console.log(`Mi auto es una ${this.marca} del año ${this.annio}`);
    }
};

//Example3 -  Función Constructora

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo =  new auto("tesla", "Podel 3", 2020);
var autoNuevo2 = new auto("tesla", "modelo X", 2018);
