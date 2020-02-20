function mostrar() {

    var clave = prompt("ingrese el número clave.");
    var contador = 0;

    while (clave.tolowerCase() != "utn750" && contador < 3) {
        contador++;
        
        clave = prompt("error!! ingrese el número clave.");
    }

    if (contador == 3) {
        alert("intentos maximos fallidos");
    } else {
        alert("bienvenido");


}//FIN DE LA FUNCIÓN
