/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoparseado;
    var numeroDosparseado;
    var resultado;
    
    //obtener los valores por id
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;
    
    //parseo de datos

    numeroUnoparseado = parseInt(numeroUnoIngresado);
    numeroDosparseado = parseInt(numeroDosIngresado);

    //operacion
    resultado = + numeroUnoparseado + numeroDosparseado;

    //mostrar resultado
    alert("el resultado es " + resultado);


}

function restar()
{
	var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoparseado;
    var numeroDosparseado;
    var resultado;
    
    //obtener los valores por id
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;
    
    //parseo de datos

    numeroUnoparseado = parseInt(numeroUnoIngresado);
    numeroDosparseado = parseInt(numeroDosIngresado);

    //operacion
    resultado = numeroUnoparseado - numeroDosparseado;

    //mostrar resultado
    alert("el resultado es " + resultado);
}

function multiplicar()
{ 
	var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoparseado;
    var numeroDosparseado;
    var resultado;
    
    //obtener los valores por id
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;
    
    //parseo de datos

    numeroUnoparseado = parseInt(numeroUnoIngresado);
    numeroDosparseado = parseInt(numeroDosIngresado);

    //operacion
    resultado = numeroUnoparseado * numeroDosparseado;

    //mostrar resultado
    alert("el resultado es " + resultado);
}

function dividir()
{
	var numeroUnoIngresado;
    var numeroDosIngresado;
    var numeroUnoparseado;
    var numeroDosparseado;
    var resultado;
    
    //obtener los valores por id
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;
    
    //parseo de datos

    numeroUnoparseado = parseInt(numeroUnoIngresado);
    numeroDosparseado = parseInt(numeroDosIngresado);

    //operacion
    resultado = numeroUnoparseado / numeroDosparseado;

    //mostrar resultado
    alert("el resultado es " + resultado);
}

