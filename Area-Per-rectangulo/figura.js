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
    document.getElementById('per-resultado').innerHTML = perimetro;

    const area = areaRectangulo(datObtenidoBase, datObtenidoAltura);
    document.getElementById('area-resultado').innerHTML = area;
}


