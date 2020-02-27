function mostrar() {
    var respuesta;
    var numero;
    var letra;
    var cantidaddenumerospares = 0;
    var contador = 0;

    do {

        do {
            numero = prompt("ingrese un numero?");
            numero = parseInt(numero);
        } while (isNaN(numero) || numero < -100 || numero > 100);

        do {
            letra = prompt("ingrese una letra");
        } while (!isNaN(letra));


        respuesta = confirm("desea continuar");
    } while (respuesta)


    if (numero % 2 == 0) {
        cantidaddenumerospares++;
    } else {
        cantidaddenumerospares++;
    }



