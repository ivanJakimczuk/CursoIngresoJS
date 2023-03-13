/**
 *  Apellido y nombre: Jakimcuk Ivan
 * ej: SW 3
 * entregado
 */
function mostrar()
{
	//tomo el mes
	var mesDelAnio;
	var mensaje;

	mesDelAnio = document.getElementById("txtIdMes").value;

	
	switch(mesDelAnio){
		case "Febrero":
			mensaje = "Este mes no tiene 29 o más días";
			break;
		default:
			mensaje = "Este mes tiene 30 o más días";
			break;
	}
  alert(mensaje);
	


}/**

		case "Febrero":
			mensaje = "Este mes no tiene 29 o más días";
			break;
			
		
	}
	if(mesDelAnio !="Febrero"){
		mensaje = "Este mes tiene 30 o más días";  */