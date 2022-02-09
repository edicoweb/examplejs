// Example1
var edad = 18;

function Elecciones(edad){
    if(edad >= 18){
        console.log("El usuario si puede ir a votar");
    }

    else{
        console.log("El usuario aun no puede votar");
    }
}

Elecciones(edad);

// Example2

var computadora = "papel";
var jugador = "tijera";
function Juego(computadora, jugador){
    var Piedra = "piedra";
    var Tijera = "tijera";
    var Papel = "papel";

    if(computadora == jugador){
        console.log("Empataste!");
    }

    else if(jugador == Piedra && computadora == Tijera){
        console.log("Ganaste!!");
    }

    else if(jugador == Tijera && computadora == Papel){
        console.log("Ganaste!!");
    }

    else if(jugador == Papel && computadora == Piedra){
        console.log("Ganaste!");
    }
    else{
        console.log("Perdiste");
    }
}

Juego(computadora, jugador);