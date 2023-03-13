/**
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año que estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
 */

function mostrar()
{
 	let estacionIngresada;
	let destinos;

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinos = document.getElementById("txtIdDestino").value;

 switch(estacionIngresada){
	case "Invierno":
		switch(destinos){
			case "Bariloche":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
				break;
		}
		break;
	case "Verano":
		switch(destinos){
			case "Mar del plata":
				alert("Se viaja");
				break;
			default:
				alert("no se viaja");
				break;
		}
		break;
	
	case "Otoño":
		switch(destinos){
			default:
			alert("Se viaja");
			break;
		}
		break;
	
	case "Primavera":
		switch(destinos){
			case"Bariloche":
			alert("No se viaja");
			break;
			default:
				alert("Se viaja");
				break;
		}
		break;
 }


}//FIN DE LA FUNCIÓN


//txtIdDestino
//txtIdEstacion