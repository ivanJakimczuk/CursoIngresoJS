/**
 * Apellido y nombre: Jakimcuk Ivan
 * ej: SW 7
 * //Hecho pero no entregado
 */
function mostrar()
{
	var estacionIngresada;
	var mensaje;

	estacionIngresada = document.getElementById("txtIdDestino").value;
	
	switch(estacionIngresada){
		case "Bariloche":
			mensaje = "ESta hacia el oeste";
			break;
		case "Cataratas":
			mensaje = "Esta ubicado hacia el norte Argentina";
			break;
		case "Mar del plata":
			mensaje = "Esta ubicado en el Este de Argentina";
			break;
		case "Ushuaia":
			mensaje = "Esta ubicado en el Sur de Argentina";
			break;

	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN