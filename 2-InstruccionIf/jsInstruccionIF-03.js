/**
 * /**
 * Apellido y nombre: Jakimczuk Ivan
 * ej: I/IF 3
 * entregado
 */
 
function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	//si la con dicion de arriba es verdadera, siempre va a ser falsa la segunda condicion
	if(edad >= 18){
		alert("Es mayor de edad");
	}
	
	else{
		alert("es menor de edad");
	}


	/*if(edad <= 17){
		alert("es menor de edad");
	}
	*/
}
	

	//la maquina lo va a evalua el valor de verdad de la condicion ya q if es 1 (Verdadero)
	//esta bien pero no tan ta bien
	/*
	
	
	*Opcion 1
	*if(edad < 18)
	{
		alert("en menor de edad");txtIdEdad
	}






	*Opcion 2
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad < 18){
		alert("Es menor de edad");
	}
	
	else{
		alert("Es mayor de edad");
	}
	*/

