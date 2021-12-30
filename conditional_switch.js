// Example1
var jugador = "piedra";
var computadora = "papel";
var Piedra = "piedra";
var Tijera = "tijera";
var Papel = "papel";

switch(true){
    case(jugador == computadora):
    console.log("Empate!");
    break;
    
    case(jugador == Piedra && computadora == Tijera):
    console.log("Ganaste!");
    break;

    case(jugador == Tijera && computadora == Papel):
    console.log("Ganaste!");
    break;

    case(jugador == Papel && computadora == Piedra):
    console.log("Ganaste!");
    break;

    default:
    console.log("Perdiste!");
    break;
}