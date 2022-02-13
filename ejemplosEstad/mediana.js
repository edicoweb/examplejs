function calcularPromedioLista(lista){
    const sumaLista = lista.reduce(
        function(numeroAcomulado = 0, nuevoNumero){
            return numeroAcomulado + nuevoNumero;
        }
    );
        return sumaLista/lista.length;
}

var listaSueldo = [450, 600, 700, 954];

const mitadLista = parseInt(listaSueldo.length/2);

function esParLista(numerito){
    if(numerito % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

let mediana;

if(esParLista(listaSueldo.length)){
    const elemento1 = listaSueldo[mitadLista-1];
    const elemento2 = listaSueldo[mitadLista];
    const promedioElementos = calcularPromedioLista([elemento1, elemento2,]);
    mediana =  promedioElementos;
}
else{
    mediana = listaSueldo[mitadLista];
}