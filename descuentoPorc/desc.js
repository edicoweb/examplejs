const calcularPrecioDescuento = (precio, descuento) =>{
    const porcentajePrecioConDescuento = 100 - descuento;
    return (precio * porcentajePrecioConDescuento)/100;

}