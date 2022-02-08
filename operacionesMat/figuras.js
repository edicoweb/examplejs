console.group("CUADRADO");

function perimetroCuadrado(lado){
   return lado*4;
}

 function areaCuadrado(lado){
    return lado*lado;
} 

function calculatePerimeterSquare(){
   const obtenerDato = document.getElementById("inputCuadrado");
   const valorIngresado = obtenerDato.value;

   const perimetro = perimetroCuadrado(valorIngresado);
   alert(perimetro);
}

function calculateAreaSquare(){
   const obtenerDato = document.getElementById("inputCuadrado");
   const valorIngresado = obtenerDato.value;

   const area = areaCuadrado(valorIngresado);
   document.write(area);
}
