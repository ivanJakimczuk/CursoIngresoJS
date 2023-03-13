/**
 * /**
 * Apellido y nombre: Jakimczuk Ivan
 * ej: I/IF 6
 */
function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	
		if(edad <= 12){
			alert("Es menor de edad");
			}else{
				if(edad >= 13 && edad <= 17){
				alert("Eres un adolescente");
				}
				else{
					alert("Eres mayor de edad");
				}
			}

}//FIN DE LA FUNCIÓN
/**
 * if(edad <= 12){
		alert("Es menor de edad");
	}

		if(edad >= 13 && edad <= 17){
			alert("Eres un adolescente");	
		}
		

		if(edad >= 18)
		{
			alert("Eres mayo de edad");
		}


	*if(edad <= 12){
		alert("Es menor de edad");
	}else if(edad >= 13 && edad <= 17){
			alert("Eres un adolescente");	
		}else{
			alert("Eres mayor de edad");
		}
 */