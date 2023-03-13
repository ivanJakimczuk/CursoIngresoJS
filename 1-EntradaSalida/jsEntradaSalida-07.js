/*
Apellido y nombre: Jakimczuk Ivan
ej: E/S 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let num1;
	let num2;
	let suma;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = num1 + num2;

	alert("La suma es:" + suma);
}

function restar()
{
	let num1;
	let num2;
	let resta;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resta = num1 - num2;

	alert("La resta es:" + resta);
}

function multiplicar()
{ 
	let num1;
	let num2;
	let multi;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	multi = num1 * num2;

	alert("La suma es:" + multi);
}

function dividir()
{
	let num1;
	let num2;
	let div;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	div = num1 / num2;

	alert("La suma es:" + div);
}
//txtIdNumeroUno
//txtIdNumeroDos


