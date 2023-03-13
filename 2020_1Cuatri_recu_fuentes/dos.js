/**
 *Para todos los ejercicios utilizar el punto parcial recuperatorio para probar su programa
y mostrar los datos por console.log o document.write.

Ejercicio 2:

una casa de venta de celulares solicita nuestros servicios para desarrollar el siguiente programa:
tomar 5 contador:

precio (validar mayor a 0).
definición de la cámara “megapíxeles”(validar entre 9 y 50)
marca (validar “iphone”, “samsung”, “xiaomi”).
tamaño.
resistente al agua(validar “si” o “no”)

a) el precio total que se recaudó.(bruto sin descuento)
b) si la venta total supera los 150000 aplicar un descuento del 30% , mostrar precio con descuento.
c) el tamaño y la marca del celular más barato.
d) La marca del celular que sea resistente al agua, con mayor megapíxeles en la cámara.



 */
function mostrar()
{
	var contador=0;
	var tamaño;
	var definicion;
	var marca;
	var precio;
	var resistente;

	var acumuladorPrecio=0;
	var precioMinimo;

	var descuento;
	var precioConDescuento;

	var banderaDelPrimero=0;
	var tamañoMinimo;
	var marcaMinimo;

	var banderaDelSegundo=0;

	var definicionMayor;
	var marcaMaxima;
	var marcaResistente;

	while(contador<5)
	{
		//valido los datos
		tamaño=parseInt(prompt("Ingrese el tamaño del celular."));

	
		definicion=parseInt(prompt("Ingrese la definicion de la camara entre 9 y 50"));
		while(definicion <9||definicion>50)
		{
			alert("Dato incorrecto")
			definicion=prompt("Ingrese la definicion de la camara entre 9 y 50)");
		}
		
		marca=prompt("Ingrese la marcar del celular(“iphone”, “samsung”, “xiaomi”)");
		while(marca !="iphone" && marca!="samsung" && marca!="xiaomi")
		{
			marca=prompt("Dato ingresado incorrecto, Ingregese “iphone”, “samsung”, “xiaomi” en miniscula");
		}

		precio=parseInt(prompt("Ingrese el precio del celular"));
		while(precio <0)
		{
			precio =prompt("Dato incorrecto,el precio del celular debe ser mayor a 0");
		}

		resistente=prompt("Ingrese 'si' el celular es resistente al agua y si no lo es ingrese 'no'.");
		while(resistente != "si" && resistente != "no")
		{
			alert("Dato incorrecto")
			resistente=prompt("Ingrese'si' o 'no' en minuscula. )");
		}


	//a) el precio total que se recaudó.(bruto sin descuento)
	acumuladorPrecio=acumuladorPrecio+precio;

	//c) el tamaño y la marca del celular más barato.
	if(precio<precioMinimo||banderaDelPrimero==0)
	{
		precioMinimo=precio;
		marcaMinimo=marca;
		tamañoMinimo=tamaño;
		banderaDelPrimero=1;
	}
		
	//d) La marca del celular que sea resistente al agua, con mayor megapíxeles en la cámara.
	if(resistente=="si")
	{
		if(definicion>definicionMayor||banderaDelSegundo==0)
		{
			definicionMayor=definicion;
			marcaResistente=marca;
			banderaDelSegundo=1;
		}
	}
		
	
	

		contador++;
	}	


    //b) si la venta total supera los 150000 aplicar un descuento del 30% , mostrar precio con descuento.

		if(acumuladorPrecio>150000)
		{
			descuento=acumuladorPrecio*30/100;
			precioConDescuento=acumuladorPrecio-descuento;
			document.write("Se aplico un descuento por superar los 150000 de 30%: "+ precioConDescuento);
		}


  document.write("el prefio toral que se recaudo es: "+acumuladorPrecio+"<br>");
  document.write("el tamaño es: "+ tamañoMinimo+"<br>"+
  " y la marca es: " +marcaMinimo +"<br>"+
  " el celular mas barato"+precioMinimo+"<br>");
  document.write("La marca es: "+ marcaResistente+" del celulr es resistente al agua y con mayor definicion"+"<br>");
 

}








/**
 * //a) el precio total que se recaudó.(bruto sin descuento)
		acumuladorPrecio=acumuladorPrecio+precio;
    //c) el tamaño y la marca del celular más barato.
	if(precio < precioMinimo ||banderaPrimero==0)
	{
		precioMinimo=precio;
		tamañoMinimo=tamaño;
		marcaMinimo=marca;
		banderaDelPrimero=1;
	}
		
    //d) La marca del celular que sea resistente al agua, con mayor megapíxeles en la cámara.

	if(resistente=="si")
	{
		if(definicion>definicionMayor||banderaDelSegundo==0)
		{
			definicionMayor=definicion;
			marcaMaxima=marca;
			banderaDelSegundo=1;
		}
	}


    contador++;
  }

  //b) si la venta total supera los 150000 aplicar un descuento del 30% , mostrar precio con descuento.
  if(acumuladorPrecio>150000)
  {
	descuento=acumuladorPrecio*30/100;
	precioConDescuento= acumuladorPrecio-descuento;
	 document.write("El precio con descuento es: "+precioConDescuento+"<br>");
  }

 */