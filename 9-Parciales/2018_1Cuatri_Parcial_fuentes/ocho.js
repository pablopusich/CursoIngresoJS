function mostrar() {
    var respuesta;
    var numero;
    var letra;
    var contadorNumerosPares = 0;
    var contadorNumerosPares = 0;
    var contadorPositivos = 0;
    var acumuladorPositivos = 0;
    var acumuladorNegativos = 0;
    var contador = 0;
    var maximo;
    var minimo;
    var primeravez = true
    var maximoLetra
    var minimoLetra

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

    // punto a
    if (numero % 2 == 0) {
        contadorNumerosPares++;
    } else if (numero == 0) {
        contadordeCeros++;

    } else {
        contadorNumerosImpares++;




        if (primeravez) {
            primeravez = false;
            minimo = numero;
            maximo = numero;
            maximoLetra = letra;
            minimoLetra = letra;

        } else {

            if (numero > maximo) {
                maximo = numero;
                maximoLetra = Letra;
            }

            if (numero < minimo) {
                minimo = numero;
                minimo = letra;
            }

        }

respuesta = confirm("desea continuar?");

while ()


