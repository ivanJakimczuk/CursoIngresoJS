/**
 * /**
 * Apellido y nombre: Jakimczuk Ivan
 * ej: I/IF 5
 * entregado
 */
function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	//Condicion que es verdadera para los valores de edad que estan por debajo o por encima del rango [13;7]
	//(Pregunto si estoy feura del rango)
	if(edad <13 || edad > 17 ){
		alert("Usted NO es adolscente");
	}

	//(Pregunto si no estoy dentro del rango)
	if(!(edad >=13 && edad <= 17 )){
		alert("Usted NO es adolscente");
	}

}//FIN DE LA FUNCIÓN