/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar() {
    // al apretar comenzar hay que sacar un numero random y una operacion random

    var numerouno
    var numerodos
    var operador
    var numerorandom

    numerouno = Math.floor(Math.random() * (11 - 1)) + 1;
    numerodos = Math.floor(Math.random() * (11 - 1)) + 1;

    numerorandom = Math.floor(Math.random() * (5 - 1)) + 1;

    switch (operadorrandom) {
        case 1:
            operador = "+"
        default:
            break;

    }

    document.getElementById("PrimerNumero").value = numerouno
}//FIN DE LA FUNCIÓN
function Responder() {
    var resultadofinal;

    respuesta = document.getElementById("Respuesta").value;

    respuesta = parseInt(respuesta);

    switch (operadorrandom) {
        case 1:
            resultadofinal = numerouno - numerodos
            break;
        default:
            break;

            
            if (resultadofinal == respuesta){
                alert("gano");
            }else{ alert("perdio")}

    }//FIN DE LA FUNCIÓN
