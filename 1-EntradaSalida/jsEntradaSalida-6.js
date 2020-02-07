/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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
    resultado = numeroUnoparseado + numeroDosparseado;

    //mostrar resultado
    alert("el resultado es " + resultado);


    
    
    

}

