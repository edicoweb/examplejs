function perimetroRectangulo(base, altura){
    return (base + altura)*2;
}

function areaRectangulo(base, altura){
    return base*altura;
}

function calcularRectangulo(){
    const obtDatoBase =  document.getElementById("inputBaseRectangulo");
    const datObtenidoBase = obtDatoBase.value;

    const obtDatoAltura = document.getElementById("inputAlturaRectangulo");
    const datObtenidoAltura  = obtDatoAltura.value;

    const perimetro =  perimetroRectangulo(parseInt(datObtenidoBase), parseInt(datObtenidoAltura));
    document.getElementById('per-resultado').innerHTML = perimetro + " cm";

    const area = areaRectangulo(datObtenidoBase, datObtenidoAltura);
    document.getElementById('area-resultado').innerHTML = area + " cm^2";
}

// *********************CIRCULO******************************

function perimetroCirculo(radio){
    const pi = 3.14;
    return 2*pi*radio;
}

const areaCirculo = (radio) =>{
    const pi = 3.14;
    return pi*(radio*radio);   
}

function calcularCirculo(){
    const obtDato = document.getElementById("inputRadioCirculo");
    const datObtenido = obtDato.value;

    const perimetroc = perimetroCirculo(datObtenido);
    document.getElementById('per-resultado-C').innerHTML = perimetroc + " cm";

    const areac = areaCirculo(datObtenido);
    document.getElementById('area-resultadoC').innerHTML = areac + " cm^2";
}