function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = true;



	while (respuesta) {
		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);
	

	while (isNaN(numero)) {
		numero = prompt("error. no es un numero valido");
		numero = parseInt(numero);
	}

	respuesta = confirm("desea continuar?");

	if (numero >= 0) {
		positivo += numero
	} else {
		negativo = negativo * numero;
		contador++;
	}
	

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;
}
}//FIN DE LA FUNCIÓN