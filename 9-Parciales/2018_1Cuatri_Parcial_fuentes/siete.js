function mostrar() {

    var contador = 0; //nos pide iterar 5 veces
    var nota;
    var sexo;
    var acumuladordenotas;¨
    var notamasbaja = 11
    var sexonotabaja
    var notas
    var contadorvarones

    while (contador < 1) {
        contador++;

 do {
            nota = prompt("ingrese la nota");
            nota = parseInt(nota);
        } while (isNaN(nota) || nota < 0 || nota > 10);

        do {
            sexo = prompt("ingrese un sexo (f o m)");
        } while (sexo != "f" && sexo != "m");

        // punto a necesitamos un acumulador de notas y un contador

        acumulador += nota;
// bandera 
        if (contador == 1){ 
            notamasbaja = nota;

        }else { if (nota < notamasbaja)

promedionotas = acumuladornotas / contador; 

    }