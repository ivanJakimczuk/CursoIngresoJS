/**
 * Para todos los ejercicios utilizar el punto parcial recuperatorio para probar su programa
y mostrar los datos por console.log o document.write.

Ejercicio 3:

La agencia “Panal de miel” de transporte que utiliza buques  nos contacta para realizar el siguiente programa:
tomar pedidos hasta que el usuario quiera. 

Nombre del buque,
Nombre del capitán del buque,
Cantidad de contenedores a llevar (validar que nos sea negativo ni 0),
Peso de los contenedores (validar entre 10000 y 40000),
Destino a llevar los contenedores (“buenos aires”, “brasil”, “china”).

a) El promedio del peso de todos los contenedores .
b) El nombre del buque y del capitán, que llevó los contenedores más livianos.
c)¿Cuál es el destino al que se llevaron la mayor cantidad de contenedores?.

Apellido y Nombre: Jakimczuk Ivan


 */
function mostrar()
{
	var contador=0;
	var respuesta="si";
	var nombreBuque;
	var nombreCapitan;
	var cantidadContenedores;
	var pesodeContenedores;
	let destino;

	let acumuladorPesoContenedores=0;
	let acumuladorContenedores=0;
	let promedio;

	let acumuladorCantidadContenedores=0;
	
	let banderaContenedorMasLiviano=0;
	let nombreBuqueMasLiviano;
	let nombreCapitanMasLiviano;
	let contenedorMasLiviano;

	let contadorBuenosAires=0;
	let contadorBrazil=0;
	let contadorChina=0;
	let destinoMasContenedores;
	



	while(respuesta=="si")
	{
		//valido los datos

		nombreBuque=prompt("Ingrese el nombre del buque");

		nombreCapitan=prompt("Ingrese el nombre del capitan");
		
		cantidadContenedores=parseInt(prompt("Ingrese la cantidad de contenedores a llevar"));
		while(cantidadContenedores < 1)
		{
			cantidadContenedores=prompt("La cantidad de contenedores no debe ser negativo ni 0 ")
		}

		pesodeContenedores=parseInt(prompt("Ingrese el peso de los contenedores entre 10000 y 40000"));
		while(pesodeContenedores <10000 || pesodeContenedores > 40000)
		{
			alert("Dato incorrecto")
			pesodeContenedores=prompt("El peso debe ser entre 10000 y 40000");
		}

		destino=prompt("Ingrese el destino(“buenos aires”, “brasil”, “china”)");
		while(destino!="buenos aires" && destino!="brazil" && destino!="china")
		{
			destino=prompt("Reingrese el destino (“buenos aires”, “brasil”, “china”) en minuscula");
		}

		
		//a) El promedio del peso de todos los contenedores.
		acumuladorPesoContenedores = acumuladorPesoContenedores + pesodeContenedores;
		acumuladorContenedores=acumuladorContenedores+cantidadContenedores;
		
		//b) El nombre del buque y del capitán, que llevó los contenedores más livianos.
		acumuladorCantidadContenedores=acumuladorCantidadContenedores+cantidadContenedores;
		
		if(cantidadContenedores<acumuladorCantidadContenedores || banderaContenedorMasLiviano==0)
		{
			contenedorMasLiviano=cantidadContenedores;
			nombreBuqueMasLiviano=nombreBuque;
			nombreCapitanMasLiviano=nombreCapitan;
			banderaContenedorMasLiviano=1;
		}

		//c)¿Cuál es el destino al que se llevaron la mayor cantidad de contenedores?.
		switch(destino)
		{
			case"buenos aires":
				contadorBuenosAires++;
			break;

			case"brazil":
				contadorBrazil++;
			break;

			case "china":
				contadorChina++;
			break;
		}
		
	respuesta=prompt("desea seguir ingresando datos?");
	}	
	//a) El promedio del peso de todos los contenedores.
	promedio=acumuladorPesoContenedores/acumuladorContenedores;

 	//c)¿Cuál es el destino al que se llevaron la mayor cantidad de contenedores?.
	if(contadorBuenosAires>contadorBrazil && contadorBuenosAires>contadorChina)
	{
		destinoMasContenedores="Bueno Aires";
	}else
	{
		if(contadorBrazil>contadorChina)
		{
			destinoMasContenedores="Brazil";
		}else
		{
			destinoMasContenedores="China";
		}
	}
	



	//a) El promedio del peso de todos los contenedores.
	document.write("El promedio: "+ promedio+"<br>");
	//b) El nombre del buque y del capitán, que llevó los contenedores más livianos.
	document.write("nombre del Buque: " + nombreBuqueMasLiviano +"<br>"+
		"nombre del capitan: " + nombreCapitanMasLiviano+"<br>"+
		"Contenedores mas liviandos que llevo fue: "+contenedorMasLiviano+"<br>")
	//c)¿Cuál es el destino al que se llevaron la mayor cantidad de contenedores?.
	document.write("El destino con mayor cantidad de contenedores es: "+ destinoMasContenedores);

}

//Ejercicio resuelto
/**
 * 
	let respuesta="si";
	let banderDelPrimero=0;
	let capitanMinimo;
	let buqueMinimo;
	
	while
	{
		//validar
		nombreDelBuque;
		
		nombreDelCapitan;

		cantidadContenedores;

		peso;
		
		destino;
		//

		//respuesta
		acumuladorPeso=acumulador
		acumuladorCantidad=acumuladorCantidad+cantidadContenedores;

		if(peso<pesoMinimo||banderaDelPrimero==0)
		{
			minimoPeso=peso;	
			capitanMinimo=nombreDelCaapitan;
			buqueMinimo=nombreDelbuque;
			banderaDelPrimero=1;
		}

	}
	promedio=acumuladorPeso/acumuladorCantidad










 */