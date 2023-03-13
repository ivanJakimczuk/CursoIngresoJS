/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)

 *Apellido y nombre: Jakimcuk Ivan
 * ej: while n°3
 * entregado
 * */
function mostrar()
{
	let password;
	
	password = prompt("Ingrese la contraseña");

	while(password != "utn750"){
		alert("Contraseña incorrecta")
		password= prompt("Ingrese la contraseña correctamente");
	}

}//FIN DE LA FUNCIÓN























/**
 * var password;
	password = prompt("ingrese la clave");

	while(password !="utn750"){
		alert("contraseña incorrecta");
		password = prompt("Por favor ingrese la contraña:");
	}
	alert("contraseña correcta");
 */