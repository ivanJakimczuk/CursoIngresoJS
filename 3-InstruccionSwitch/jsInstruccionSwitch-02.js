/**
 * al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.

 Apellido y nombre: Jakimcuk Ivan
 * ej: SW 2
 *Entregado
*/
function mostrar()
{
	//tomo el mes
	var mesDelAnio;
	var mensaje;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio){
		
		case "Julio":
			mensaje = "Abrigate que hace frio";
			break;
		case"Agosto":
			mensaje = "Abrigate que hace frio";
			break;
		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
		default:
			mensaje = "Falta para el invierno";
			break;
	}
  alert(mensaje);




}//FIN DE LA FUNCIÓN
/**
 * switch(mesDelAnio){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
			break;	
		case "Julio":;
		case"Agosto":
			mensaje = "Abrigate que hace frio";
			break;
		case"Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
	}
 */