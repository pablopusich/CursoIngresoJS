function mostrar()
{

	var contador=0;
	var acumulador=0;

	while (contador < 5){
		contador++;
		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)){
			numero = prompt("ingrese un numero valido");
			numero = parseInt(numero);
}

acumulador += numero;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}