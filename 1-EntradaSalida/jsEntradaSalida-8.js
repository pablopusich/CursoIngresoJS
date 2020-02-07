/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoparseado;
    var numeroDosparseado;
    var resultado;
    
    //obtener los valores por id
    numeroUnoIngresado = document.getElementById("numeroDividendo").value;
    numeroDosIngresado = document.getElementById("numeroDivisor").value;
    
    //parseo de datos

    numeroUnoparseado = parseInt(numeroUnoIngresado);
    numeroDosparseado = parseInt(numeroDosIngresado);

    //operacion
    resultado = numeroUnoparseado % numeroDosparseado;

    //mostrar resultado
    alert("el resultado es " + resultado);

}
