/**
 * Apellido y nombre: Jakimcuk Ivan
 * ej: SW 5
 * entregado
 */
function mostrar()
{
	//tomo la hora
	var horaDelDia;
	var mensaje;

	horaDelDia = parseInt(document.getElementById("txtIdHora").value);
	mensaje = "No es una hora valida";

	switch(horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
	}

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN