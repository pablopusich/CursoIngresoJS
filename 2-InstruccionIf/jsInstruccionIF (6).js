function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;

if (edad > 17) { 
    alert("mayor de edad");
 } else { 
    if (edad > 13) { 
    alert("no es adolescente");
    } else { 
        alert("niño");
    }
}
}//FIN DE LA FUNCIÓN