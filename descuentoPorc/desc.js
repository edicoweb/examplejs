const calcularPrecioDescuento = (precio, descuento) =>{
    const porcentajePrecioConDescuento = 100 - descuento;
    return (precio * porcentajePrecioConDescuento)/100;
}

function calcularPrecioFinalConDescuento(){
    const obtDatoPrecio = document.getElementById("inputPrecio");
    const valorPrecio = obtDatoPrecio.value;

    const obtDatoDescuento = document.getElementById("inputDescuento");
    const valorDescuento = obtDatoDescuento.value;

    const precioFinalProducto = calcularPrecioDescuento(valorPrecio, valorDescuento);
    document.getElementById('ouputPrecio').innerHTML =  "El precio final es: "+precioFinalProducto;
}