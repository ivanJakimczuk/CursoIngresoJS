/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
10-Maximo numero ingresado de los positivos y minimo de los negativos.

*Apellido y nombre: Jakimcuk Ivan
 * ej: while n°10
 * */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNeg=0;
	var sumaPos= 0;
	var contPos=0;
	var contNeg=0;
	var contCeros=0;
	var contPares=0;
	var promedioPos;
	var promedioNeg;
	var diferencia;
	var mensaje;// segunda forma de mostrar el "document.write" o el "alert"
	var maxPos;
	var banderaNumPositivo = 0;
	var minNeg;
	var banderaNumNegativo=0;

	respuesta="si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);


		//DEL PUNTO 1 AL 5
		if(numeroIngresado < 0 ){
			//1suma de negativos
			sumaNeg += numeroIngresado;

			//4 cantidad de negativos
			contNeg ++;
			
			//10 Maximo numero ingresado de los positivos y minimo de los negativos
			if(numeroIngresado > minNeg || banderaNumNegativo == 0)
			{
				minNeg= numeroIngresado;
				banderaNumNegativo = 1;
			}

			
		}
		else{
			
			if(numeroIngresado > 0)
			{
				//2 suma de positivos
				sumaPos += numeroIngresado;//forma abreviada sumaPos = sumaPos + numeroIngresado;
				
				//cantidad de positivos
				contPos ++;		//forma abreviada contNeg = contador + 1;

				if(numeroIngresado > maxPos || banderaNumPositivo == 0)
				{
					maxPos = numeroIngresado;
					banderaNumPositivo=1;

				}
			}
			else{
				contCeros++;
			}	
		}

		//DEL PUNTO 6
		if(numeroIngresado % 2 == 0){
			contPares++; //contPares = contPares + 1;
		}

		
		
		respuesta=prompt("desea continuar?");
	}//fin del while


	//PUNTO 7 Y 8
	promedioNeg= sumaNeg/contNeg;
	promedioPos= sumaPos/contPos;
	

	//PUNTO 9
	diferencia = sumaPos - sumaNeg;

	//Muestro el mesnaje  desde otra pagina
	mensaje = "1- Suma de los negativos:" + sumaNeg + '<br>'+
	"2- Suma de los positivos:" + sumaPos + '<br>'+
	"3- Cantidad de positivos:" + contPos + '<br>'+
	"4- Cantidad de negativos:" + contNeg + '<br>'+
	"5- Cantidad de ceros:" + contCeros + '<br>'+
	"6- Cantidad de números pares:" + contPares + '<br>'+
	"7- Promedio de positivos:" + promedioPos + '<br>'+
	"8- Promedios de negativo:" + promedioNeg + '<br>'+
	"9- Diferencia entre positivos y negativos:" + diferencia + '<br>'+
	"10-Maximo numero ingresado de los positivos es: "+ maxPos +" y minimo de los negativos es:"+ minNeg;


	document.write(mensaje);
	
	
}//FIN DE LA FUNCIÓN

//<>