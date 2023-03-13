/*
Apellido y nombre: Jakimczuk Ivan

Para todos los ejercicios utilizar el punto parcial recuperatorio para probar su programa
y mostrar los datos por console.log o document.write.

Ejercicio 3:

La agencia “Panal de miel” de transporte que utiliza buques  nos contacta para realizar el siguiente programa:
tomar pedidos hasta que el usuario quiera. 

Nombre del buque,
Nombre del capitán del buque,
Edad del capitan(de 35  hasta 70 años)
Cantidad de horas de viaje (mas de 6 hs.)
Cantidad de contenedores a llevar (validar que nos sea negativo ni 0 hasta 150 ),
Peso de los contenedores (validar entre 8000 y 60000),
Destino a llevar los contenedores (“buenos aires”, “brasil”, “china”).

a) El contenedor mas liviano que viajo a brasil.
b) El nombre del buque y del capitán, que llevó los contenedores más pesado.
c)¿Cuál es el destino que realizo menos hs de viaje?.
d) El capitan mas grande que viajo a china.



*/

function mostrar()
{
	let contador=0;
	let respuesta="si";
	let nombreBuque;
	let nombreCapitan;
	let edadCapitan;
	let cantidadHorasViaje;
	let cantidadContenedores;
	let peso;
	let destino;
	
	let acumuladorContenedoresMasLiviano=0;
	
	let banderaContenedorMasLiviano=0;

	let banderaContenedorMasPesado=0;
	let acumuladorCantidadContenedores=0;
	let contenedorMaspesado;

	let acumuladorEdadMasGrande=0;
	let banderaEdadMasGrande=0;
	let nombreCapitanMasGrande;

	let contadorChina=0;
	let contadorBuenosAires=0;
	let contadorBrasil=0;
	let destinoMenosHSViajes;

	while(respuesta=="si"){

		nombreBuque=prompt("Ingrese el nombre del buque");

		nombreCapitan=prompt("Ingrese el nombre del capitan");

		edadCapitan=parseInt(prompt("Ingrese la edad del capitan(de 35  hasta 70 años)"));
		while(edadCapitan<35  || edadCapitan>70)
		{
			edadCapitan=parseInt(prompt("Dato incorrecto, Ingrese la edad del capitan(de 35  hasta 70 años)"));
		}
		
		cantidadHorasViaje=parseInt(prompt("ingrese las horas de viaje"));
		while(cantidadContenedores>6)
		{
			cantidadHorasViaje=parseInt(prompt("las horas de viaje debe ser mayor a 6"));
		}

		cantidadContenedores=parseInt(prompt("Ingrese la cantidad de contenedores a llevar"));
		while(cantidadContenedores < 0 ||cantidadContenedores >150)
		{
			cantidadContenedores=parseInt(prompt("La cantidad de contenedores no debe ser negativo ni 0 hasta 150 "));
		}

		peso=parseInt(prompt("Ingrese el peso de los contenedores entre 8000 y 60000"));
		while(peso <8000 || peso > 60000)
		{
			alert("Dato incorrecto")
			peso=parseInt(prompt("El peso debe ser entre entre 8000 y 60000"));
		}

		destino=prompt("Ingrese el destino(“buenos aires”, “brasil”, “china”)");
		while(destino!="buenos aires" && destino!="brasil" && destino!="china")
		{
			destino=prompt("Reingrese el destino (“buenos aires”, “brasil”, “china”) en minuscula");
		}

		
		
		//b) El nombre del buque y del capitán, que llevó los contenedores más pesado. /////////falta terminar
		acumuladorCantidadContenedores=acumuladorCantidadContenedores+peso;
		
		if(peso<acumuladorCantidadContenedores || banderaContenedorMasPesado==0)
		{
			contenedorMaspesado=peso;
			nombreBuqueMasPesado=nombreBuque;
			nombreCapitanContenedorMasPesado=nombreCapitan;
			banderaContenedorMasPesado=1;
		}

		//a) El contenedor mas liviano que viajo a brasil.
		//c)¿Cuál es el destino que realizo menos hs de viaje?.
		//d) El capitan mas grande que viajo a china.
		switch(destino)
		{
				case "buenos aires":
					contadorBuenosAires++;
					break;
				case "brasil":
					contadorBrasil++;
					if(peso<acumuladorContenedoresMasLiviano || banderaContenedorMasLiviano==0)
					{
						contenedorMasLiviano=peso;
						banderaContenedorMasLiviano=1;
					}
					break;
				case "china":
					contadorChina++;
					if(edadCapitan>acumuladorEdadMasGrande||banderaEdadMasGrande==0)
				{
					acumuladorEdadMasGrande=edadCapitan;
					nombreCapitanMasGrande=nombreCapitan;
					banderaEdadMasGrande=1;
				}
					break;
		}

		respuesta=prompt("Desea seguir ingresando datos?");
	}


	//c)¿Cuál es el destino que realizo menos hs de viaje?.
	if(contadorBuenosAires>contadorBrasil && contadorBuenosAires>contadorChina)
	{
		destinoMenosHSViajes="Buenos Aires";
	}
	else
	{
		if(contadorBrasil>contadorChina)
		{
			
		destinoMenosHSViajes="Brasil";
		}
		else
		{
			
		destinoMenosHSViajes="China";
		}
	}


	//a) El contenedor mas liviano que viajo a brasil.
	document.write("El contenedor mas liviano que viajo a brazil: "+contenedorMasLiviano+"<br>");
	//b) El nombre del buque y del capitán, que llevó los contenedores más pesado.
	document.write("El nombre del buque "+nombreBuqueMasPesado +"<br>"+
	"y del capitán"+ nombreCapitanContenedorMasPesado+"<br>"+
	" y el contenedor más pesado es de: ");
	//c)¿Cuál es el destino que realizo menos hs de viaje?.

	//d) El capitan mas grande que viajo a china.

}



























//txtIdNombre

/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'



//declaramos una varieaable donde guardamos el dato ingresado
	var nombre;
	let txtIdNombre;
	
	//opcion1
	//nombreIngresado=txtIdNombre.value;

	//opcion 2
	nombre=document.getElementById("txtIdNombre").value

	alert("Su nombre es: " + nombre);*/