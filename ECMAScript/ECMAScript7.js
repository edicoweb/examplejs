// CAMBIO 1*********************************************************

let numeritos = [1, 2, 3, 4];

if(numeritos.includes(2)){
    console.log('si existe');
} else{
    console.log('no existe');
}

// CAMBIO 2 -> exponente*********************************************************

let base;
let exponente;

let suma = (base, exponente) => {
    let respuesta = base**exponente;
    console.log(respuesta);
}

suma(2, 3);