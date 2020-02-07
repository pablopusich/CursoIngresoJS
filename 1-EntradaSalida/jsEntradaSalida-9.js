/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var sueldoparseint;
    var resultado;
    

    sueldo = document.getElementById("sueldo").value;

    resultado = sueldo * 1.10;

  alert("el resultado es " + resultado);



	
}
