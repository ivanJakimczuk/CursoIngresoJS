/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=parseInt(prompt("Ingrese un numero"));

		acumulador=acumulador+numeroIngresado;

		respuesta=prompt("Desea seguir ingresando un numero?");
		contador++;
	}

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN