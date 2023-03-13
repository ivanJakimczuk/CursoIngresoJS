/*
Apellido y nombre: Jakimczuk Ivan
ej: E/S 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

9 BIS : Debemos lograr tomar el importe
por ID ,transformarlo a entero (parseInt),
y tambien pedirle al usuario mediante
una entrada de datos cual es el aumento
a realizar,y luego mostrar el importe
con el aumento en el TextBox "RESULTADO".




*/
function mostrarAumento()
{
	let importe;
	let aumento;
	let sueldoAumento;
	let resultado;


	//alert("El aumento sera de un 10%");
	importe= parseInt (document.getElementById("txtIdSueldo").value);
	
	aumento = parseInt(prompt("Ingrese el aumenteo ingresado en entero"));
	
	sueldoAumento = importe * aumento/100;

	resultado = importe + sueldoAumento;

	document.getElementById("txtIdResultado").value = resultado;

	//alert("Resultado: " + sueldoAumento);
}
//txtIdSueldo


/**
 * 	let importe;
	let aumento;
	let sueldoAumento;

	importe = parseInt(document.getElementById("txtIdSueldo").value);
	//1 forma
	//aumento = importe * 10/100;
	
	//2 forma 
	aumento = importe * 0.1;

	//3da forma
	//sueldoAumento= importe * 1.1;
	
	//4ta forma
	//sueldoAumento = importe + importe * 10/100;


	sueldoAumento = importe + aumento;

	document.getElementById("txtIdResultado").value = sueldoAumento;
	
	
	
	
 */
