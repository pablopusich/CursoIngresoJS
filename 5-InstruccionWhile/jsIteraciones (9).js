function mostrar() {

	var contador = 0;
	var maximo = 0;
	var minimo = 0;
	var numero;
var primeraIteracion = true;
	// declarar variables

	var respuesta = true;

	while (respuesta) {
		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);


		while (isNaN(numero)) {
			numero = prompt("error. no es un numero valido");
			numero = parseInt(numero);
		}

// calculo

		respuesta = confirm("desea continuar?");

if (primeraIteracion) {
	primeraIteracion = false;
	minimo = numero;
	maximo = numero;
	} else {
		if (numero > maximo) {
			maximo = numero
			} 
			if (numero < minimo){
				minimo = numero
			} 

		}
	}
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN