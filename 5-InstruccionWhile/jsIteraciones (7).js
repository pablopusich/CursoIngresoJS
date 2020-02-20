function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

while (acumulador >= 0 || acumulador <= 0){
		contador++;
		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		while (isNaN(numero)){
			numero = prompt("ingrese un numero valido");
			numero = parseInt(numero);
}

acumulador += numero;



document.getElementById('suma').value=acumulador; 
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN