var jugador = "piedra";
var computadora = "tijera";
var Piedra = "piedra";
var Tijera = "tijera";
var Papel = "papel";

switch(true){
    case(jugador == Piedra && computadora == Tijera):
    console.log("Ganaste!");
    break;

    default:
    console.log("No se nada");
    break;
}