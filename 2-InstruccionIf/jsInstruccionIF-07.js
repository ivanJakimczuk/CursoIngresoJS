//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",mostrar el siguiente mensaje: 
	//'Es muy pequeño para NO ser soltero.'
/**
 * /**
 * Apellido y nombre: Jakimczuk Ivan
 * ej: I/IF 7
 */
	function mostrar()
{

	let edad;
	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if(edad <=17 && estado !="Soltero" ){
		alert( " Es muy pequeño para NO ser soltero");
	}else{
		alert(estado);
	}

}//FIN DE LA FUNCIÓN
//estadoCivil
