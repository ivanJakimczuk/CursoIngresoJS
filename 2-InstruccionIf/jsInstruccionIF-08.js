/**
 * /**
 * Apellido y nombre: Jakimczuk Ivan
 * ej: I/IF 8
 */
function mostrar()
{
	let edad;
	let estado;


	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado =document.getElementById("estadoCivil").value;
	
	if(edad <18 ){
		alert(estado);
	}else{
		if(edad >= 18 && estado == "Soltero" ){
		alert("Es soltero y no es menor");
		}
	}

	


}//FIN DE LA FUNCIÓN
/**
 * if(edad <18 ){	
 * 
 * 		if(estado != "Soltero"){
			alert(estado);
	}else{
		if( estado == "Soltero" ){
		alert("Es soltero y no es menor");
		}
	}
 */