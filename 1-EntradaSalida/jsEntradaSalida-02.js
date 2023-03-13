/*

Apellido y nombre:Jakimczuk Ivan

Para todos los ejercicios utilizar el punto parcial recuperatorio para probar su programa
y mostrar los datos por console.log o document.write.

Ejercicio 2:

una casa de venta de celulares solicita nuestros servicios para desarrollar el siguiente programa:
tomar 5 pedidos:

precio (validar mayor a 0).
definición de la cámara “megapíxeles”(validar entre 9 y 50)
marca (validar “iphone”, “samsung”, “xiaomi”).
tamaño.
resistente al agua(validar “si” o “no”).
memoria interna del celular(validar 32 o 64)

a) el precio total que se recaudó.(bruto sin descuento) de los celulares con 32 de memoria interna.
b) si la venta total supera los 100000 aplicar un descuento del 15% y si supera 200000 aplicar un 25% de descuento, mostrar precio con descuento.
c) el tamaño y la marca del celular mas caro de 64 de memoria interna.
d) La marca del celular que sea xiaomi, con menor megapíxeles en la cámara.
e) la marca de celular mas vendida.


*/
function mostrar()
{
	let contador=0;
	let precio;
	let definicion;
	let marca;
	let tamaño;
	let resistente;
	let memoria;
	
	let acumuladorPrecioFinal=0;

	let porcentaje=0;
	let descuento;
	let precioFinal;

	let acumuladorPrecioMaximo;
	let banderaDelPrimero=0;
	let marcaMaximo;
	let tamañoMaximo;

	let acumuladorDefinicionMenor;
	let marcaMinimo;
	let banderaDelSegundo=0;

	let contadorIphone=0;
	let contadorSamsung=0;
	let contadorXiaomi=0;



	while(contador<5)
	{
		//valido los datos
		precio=parseInt(prompt("Ingrese el precio del celular"));
		while(precio <0)
		{
			precio =parseInt(prompt("Dato incorrecto,el precio del celular debe ser mayor a 0"));
		}

		definicion=parseInt(prompt("Ingrese la definicion de la camara entre 9 y 50"));
		while(definicion <9||definicion>50)
		{
			definicion=parseInt(prompt("Ingrese la definicion de la camara entre 9 y 50)"));
		}

		marca=prompt("Ingrese la marcar del celular(“iphone”, “samsung”, “xiaomi”)");
		while(marca !="iphone" && marca!="samsung" && marca!="xiaomi")
		{
			marca=prompt("Dato ingresado incorrecto, Ingregese “iphone”, “samsung”, “xiaomi” en miniscula");
		}
		
		tamaño=parseInt(prompt("Ingrese el tamaño del celular."));

		resistente=prompt("Ingrese 'si' el celular es resistente al agua y si no lo es ingrese 'no'.");
			while(resistente != "si" && resistente != "no")
			{
				resistente=prompt("Ingrese'si' o 'no' en minuscula. )");
			}
		memoria=parseInt(prompt("Ingrese la memoria interna del celular (32 o 64)"));
		while( memoria!=32 && memoria!=64)
		{
			memoria=parseInt(prompt("Dato incorrecto, ingrese si la memoria es de (32 o 64)"));
		}
			//a) el precio total que se recaudó.(bruto sin descuento) de los celulares con 32 de memoria interna.
			//c) el tamaño y la marca del celular mas caro de 64 de memoria interna.
			if(memoria==32)
			{
			acumuladorPrecioFinal=acumuladorPrecioFinal+precio;
			}else
			{
				if(precio>acumuladorPrecioMaximo || banderaDelPrimero==0)
				{
						acumuladorPrecioMaximo=precio;
						marcaMaximo=marca;
						tamañoMaximo=tamaño;
						banderaDelPrimero=1;
				}	
			
			}
		
	
	
			//d) La marca del celular que sea xiaomi, con menor megapíxeles en la cámara.
			//e) la marca de celular mas vendida.
			switch(marca)
			{
				case "iphone":
					contadorIphone++;
				break;

				case "samsung":
					contadorSamsung++;
				break;

				case "xiaomi":
					contadorXiaomi++;
					if(definicion<acumuladorDefinicionMenor||banderaDelSegundo==0)
					{
						acumuladorDefinicionMenor=definicion;
						marcaMinimo=marca;
						banderaDelSegundo=1;
					}
				break;

			}
		contador++;
	}
	//b) si la venta total supera los 100000 aplicar un descuento del 15% y si supera 200000 aplicar un 25% de descuento, mostrar precio con descuento.	
	
	
	if(acumuladorPrecioFinal>100000)
	{
		porcentaje=15;
	}else{
		if(acumuladorPrecioFinal>200000)
		{
			porcentaje=25;
		}	
	}
	descuento = precio * porcentaje/100;
	precioFinal = precioSinDescuento - descuento; 
	
	
	//e) la marca de celular mas vendida.
	if(contadorSamsung > contadorIphone && contadorSamsung > contadorXiaomi)
	{
		celularMasVendido= "Samsung";

	}
	else
	{
		if(contadorIphone > contadorXiaomi)
		{
			celularMasVendido= "Iphone";
		}
		else
		{
			celularMasVendido= "Xiaomi";
		}
	}


	
//a) el precio total que se recaudó.(bruto sin descuento) de los celulares con 32 de memoria interna.
	document.write("El precio que se recuado de los celulares con 32 de memoria interna es: "+acumuladorPrecioFinal+"<br>");
//b) si la venta total supera los 100000 aplicar un descuento del 15% y si supera 200000 aplicar un 25% de descuento, mostrar precio con descuento.
	document.write("si la venta total supera los 100000 se aplica un descuento del 15% y si supera 200000 se aplica un 25% de descuento es de: "+precioFinal+"<br>");
//c) el tamaño y la marca del celular mas caro de 64 de memoria interna.
	document.write("el tamaño"+tamañoMaximo +" y la marca del celular mas caro de 64 de memoria interna. : "+marcaMaximo+"<br>");
//d) La marca del celular que sea xiaomi, con menor megapíxeles en la cámara.
	document.write("La marca del celular que sea xiaomi, con menor megapíxeles en la cámara: "+marcaMinimo+"<br>");
//e) la marca de celular mas vendida.
	document.write("El celular mas vendido: "+celularMasVendido+"<br>");	
	
	
}



























/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'

//Tambien sirve utilizar let
	let nombre;
	
	nombre = prompt("Ingrese su nombre");

	alert("Su nombre es: " + nombre);




//creo la variable
let msg;

//lugar donde guaro --- que guardo
msg = prompt("Ingrese su dato");

//muestro el valor que contiene la variable
alert(msg);

*/
