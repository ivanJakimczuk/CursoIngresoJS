/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.

*Apellido y nombre: Jakimcuk Ivan
 * ej: while n°9
 * */
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == "es el primero")
		{

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "Ya pase";
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado < numeroMinimo)
				{
					numeroMinimo= numeroIngresado;
				}
			}
		}

		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN