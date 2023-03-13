/**
 *  Apellido y nombre: Jakimcuk Ivan
 * ej: SW 1
 * Entregado
 */
function mostrar()
{
	var mesDelAnio;
	//var mensaje;
	var mensaje= "no es un mes valido";

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio){
		case "Enero":// texto(string), numero enteros, caracteres. aprox 255
			mensaje =  "Que comiece el año!!";
			break;
		case "Marzo":
			mensaje="a clases!!!";
			break;
		case "Julio":
			mensaje="Se vienen las vacaiones!!";
			break;
		case"Diciembre":
			mensaje = "Felices fiestas!!";
			break;
	}
  alert(mensaje);

}//FIN DE LA FUNCIÓN
/**
 * if (mesDelAnio == "Enero")
 	{
		alert("Que comiece el año");
	}
	else
	{
		if(mesDelAnio == "Enero")
		{
		alert("Que comiece el año");
		}
		else
		{
			if(mesDelAnio == "Enero")
			{
		alert("Que comiece el año");
			}
		}
	}
 */