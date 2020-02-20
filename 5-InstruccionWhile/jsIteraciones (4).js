function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
    var contador = 9;

    while (numero >= 9 && contador < 3) {
        contador++;
        
        var numero = prompt("ingrese un número entre 0 y 10.");
    }

    if (contador == 3) {
        alert("intentos maximos fallidos");
    } else {
        alert("bienvenido");

} 


}