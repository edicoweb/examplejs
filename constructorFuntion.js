var marca = ["Samsung", "Huawei", "Motorola"];
var modelo = ["A52s", "Y9 prime", "G9 plus"];
var annio = [2021, 2019, 2020];

function miCelular(marca, modelo, annio){
    this.marca = marca,
    this.modelo = modelo,
    this.annio = annio;
}

for( var i = 0; i<marca.length && i<modelo.length && i<annio.length; i++){
    var celular = new miCelular(marca[i], modelo[i], annio[i]);
    console.log(celular);
}