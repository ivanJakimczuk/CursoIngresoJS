/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*Apellido y nombre: Jakimcuk Ivan
 * ej: while n°8
 * entregado
 * */
function mostrar()
{
	var contador;
	var banderaNegativo=0;
	var respuesta;
	var sumaPositivos;
	var banderaSuma=0;
	var multiplicacionNegativos;
	var numeroIngresado;


	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	banderaNegativo=0;
	banderaSuma=0;
	respuesta="si";

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			banderaSuma++;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
				banderaNegativo = banderaNegativo + 1; 
			}
		}
		respuesta= prompt("Desea seguir cargando numeros? ");	
		contador++;	
	}

	if(numeroIngresado == 0){
		multiplicacionNegativos = 0;
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;
	

}//FIN DE LA FUNCIÓN
