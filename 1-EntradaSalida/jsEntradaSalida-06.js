/*
Apellido y nombre: Jakimczuk Ivan
ej: E/S 6
Debemos lograr tomar Los numeros por ID.value , transformarlos a enteros "parseInt()" y Sumarlos.
mostrar el resulto por medio de "alert()"
ej.: "la suma es 750"
*/
function sumar()
{
	let num1;
	let num2;
	let suma;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	suma = num1 + num2;

	alert("la suma es: " + suma); 
}
	//txtIdNumeroUno
	//txtIdNumeroDos
 
/**
 * let num1;
	let num2;
	let suma;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = num1 + num2;

	alert("la suma es: " + suma); 
 */