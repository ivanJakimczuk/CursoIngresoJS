/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.

*Apellido y nombre: Jakimcuk Ivan
 * ej: while n°4
 * entregado
 * */
function mostrar()
{	
	let num = 0;

	num = parseInt(prompt("Ingrese un numero entre 0 y 10"));
	
	while(num >10){
		alert("Numero ingresado incorrecto");
		num = prompt("Ingrese un numero entre 0 y 9");

	}
	
}//FIN DE LA FUNCIÓN
//><



/**
 * var numeroIngresado;
	numeroIngresado = prompt("Ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado); 

	while(numeroIngresado > 10){
		alert("Numero invalido")
		numeroIngresado = prompt("Por favor, ingreses un numero entre 0 y 10");
	}
 */