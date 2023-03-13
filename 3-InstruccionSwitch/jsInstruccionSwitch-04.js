/**
 * Apellido y nombre: Jakimcuk Ivan
 * ej: SW 4
 * entregado
 */
function mostrar()
{
	//tomo el mes
	var mes;
	var mensaje;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			mensaje = "tiene 28 días.";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "tiene 30 días.";
			break;
		default:
			mensaje = "tiene 31 días.";
			break;
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN