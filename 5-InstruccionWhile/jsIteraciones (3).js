function mostrar() {

    var clave = prompt("ingrese el número clave.");
    var contador = 0;

    while (clave.toLowerCase() != "utn750") {
        contador++;
        if (contador == 3) {
            break;

        }


        clave = prompt("error!! ingrese el número clave.");
    }

    if (contador == 3) {
        alert("intentos maximos fallidos");
    } else {
        alert("bienvenido");
    }

}//FIN DE LA FUNCIÓN
