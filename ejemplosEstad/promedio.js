const precios = [10, 15, 35];
    var sumaPrecios = 0;
    for( let i = 0 ; i<precios.length; i++ ){
        sumaPrecios =  sumaPrecios + precios[i];
    }
    const precioTotal = sumaPrecios / precios.length;
    console.log(precioTotal);

// **********************************UTILIZANDO FOR***********

    function calcularPromedioLista(lista){
        let sumaLista = 0;
        for(let i=0; i<lista.length; i++){
            return sumaLista = sumaLista + lista[i];
        }
    }

    calcularPromedioLista([30,10,20]);

    //******************************UTILIZANDO METODO REDUCE****************

    function calcularPromedioLista(lista){
        const sumaLista = lista.reduce(
            function(numeroAcomulado = 0, nuevoNumero){
                return numeroAcomulado + nuevoNumero;
            }
        );
            return sumaLista/lista.length;
    }