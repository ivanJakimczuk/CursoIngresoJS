/**
 * Apellido y nombre: Jakimcuk Ivan
 * ej: SW 8
 * //hecho pero nop entregado
 */
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado){
		case "Bariloche":
			mensaje = "Hace Frio";
			break;
		case "Cataratas":
			mensaje = "Hace Calor";
			break;
		case "Mar del plata":
			mensaje = "Hace Calor";
			break;
		case "Ushuaia":
			mensaje = "Hace firo";
			break;

	}	
	alert(mensaje);

}//FIN DE LA FUNCIÓN