function mostrar() {
    var respuesta;
    var marca;
    var peso;
    var temperatura;
    var contadorTemperaturasPares = 0;
    var primeraVez = true;
    var pesoMinimo;
    var pesoMaximo;
    var marcaMinima;
    var marcaMaxima;
    var contadorMarcaMenoraCero = 0;
    var acumuladorPeso = 0;
    var contadorPeso = 0;
    var promediopesototal;



    do {
        do {
            peso = prompt("ingrese un peso entre 1 y 100");
            peso = parseInt(peso);
        } while (isNaN(peso) || peso < 1 || peso > 100);

        do {
            marca = prompt("ingrese una marca del producto");

        } while (!isNaN(marca));

        do {
            temperatura = prompt("ingrese la temperatura");
            temperatura = parseInt(temperatura);
        } while (isNaN(temperatura) || temperatura < -30 || temperatura > 30);



        // PUNTO A
        if (temperatura % 2 == 0) {
            contadorTemperaturasPares++;
        }

        // PUNTO B
        if (primeravez) {
            primeravez = false;
            pesoMinimo = peso;
            pesoMaximo =peso;
            marcaMinima = marca;
            marcaMaxima = marca;

        } else {

            if (peso > pesoMaximo) {
                pesoMaximo = peso;
                marcaMaxima = marca;
            } else if (peso < pesoMinimo) {
                pesoMinimo = peso;
                marcaMinima = marca;
            }

        }
        if (temperatura < 0) {
            contadorMarcaMenoraCero++;
        }

        contadorPeso++
        acumuladorPeso += peso;


        respuesta = confirm("desea continuar");
    } while (respuesta);                       //hasta que el usuario quiera! al tener este while ya me aseguro de que funcione

    promediopesototal = acumuladorPeso / contadorPeso;

    document.write("cantidad de temperaturas pares " + contadorTemperaturasPares + "<br>" + "La marca del producto más pesado " + marcaMaxima + "<br>" +
        "La cantidad de productos que se conservan a menos de 0 grados " +  contadorMarcaMenoraCero + "<br>" + " El promedio del peso de todos los productos" + 
        promediopesototal + "<br>" +  "El peso máximo " + pesoMaximo + "<br>" + "El peso minimo " + pesoMinimo

