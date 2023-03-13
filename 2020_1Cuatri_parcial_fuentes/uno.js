/**
 *
//examen
Para todos los ejercicios utilizar el punto parcial recuperatorio para probar su programa
y mostrar los datos por console.log o document.write.

Ejercicio 1:

El hospital veterinario “Firulais” nos pide realizar un programa para tomar los siguientes datos:
pedir el ingreso de datos hasta que el usuario quiera,

- nombre de la mascota.
- Vacuna antirrábica (validar “si”, ”no”)
- Tipo: (Validar “gato”, “perro”, “jirafa”)
- Peso: (Más de 0)
- edad (validar que no sea negativo)
- nombre del veterinario (validar su apellido debe ser (“perez”, “lopez”,”diaz”)

a) Nombre de la mascota que tenga la vacuna antirrábica y que sea la más joven.
b) El gato más pesado que se atendió.
c) El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.
*/


function mostrar()
{
	

}






















/* Ejercicio 1
el hospital mi pueblo nos pide realizar un programa para tomar los siguientes datos:
pedir el ingreso de datos hasta que el usuario quiera
vacunas aplicadas validar (0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)
edad (validar que no sea negativo y no puede sobrepasar los 150 años)
doctor (validar su apellido debe ser (perez, lopez,diaz))
nombre del paciente.

a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años.
b) el menor paciente que tenga 1 dosis o más, su nombre y su edad.
c)el doctor que más pacientes tuvo, sacar el promedio de edades.



// Ejercicio 1		
	let contador=0;
	let respuesta="si";
	let vacunasIngresadas;
	let edadIngresada;
	let doctor;
	let datosPaciente;
	let totalPacientesVAcunas;
	
	let doctorMasPacientes;


	let acumuladorEdadLopez=0;
	let acumuladorEdadPerez=0;
	let acumuladorEdadDiaz=0;
	let contadorLopez=0;
	let contadorPerez=0;
	let contadorDiaz=0;

	let pacientesSinVacunas=1;
	let contadorSinVacunas=0;
	
	var banderaDelPrimero=0;
	var minimaEdad;

	
	

	while(respuesta== "si")
	{
		//valido los datos
		datosPaciente=prompt("Ingrese su nombre y apellido");

		/*vacunasIngresadas=parseInt(prompt("Ingrese cuantas vacunas tiene aplicadas(0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)"));
		while(vacunasIngresadas !=0 && vacunasIngresadas !=1 && vacunasIngresadas !=2 && vacunasIngresadas !=3)
		{
			vacunasIngresadas=prompt("Ingrese cuantas vacunas tiene aplicadas(0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)");
		}//
		vacunasIngresadas=parseInt(prompt("Ingrese cuantas vacunas tiene aplicadas(0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)"));
		while(vacunasIngresadas<0 || vacunasIngresadas >3)
		{
			vacunasIngresadas=prompt("Ingrese cuantas vacunas tiene aplicadas(0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)");
		}
		
		edadIngresada=parseInt(prompt("Ingrese su edad"));
		while(edadIngresada < 0 || edadIngresada > 150)
		{
			edadIngresada=prompt("Dato ingresado incorrecto, No debe ser menor a 0 y no debe superar a 150 años");
		}

		marcaPintura=prompt("Ingrese los el apelido del doctor con el que tiene turno (perez, lopez,diaz)");
		while(marcaPintura !="perez" && marcaPintura !="lopez" && marcaPintura !="diaz")
		{
			marcaPintura =prompt("Dato incorrecto, ingrese de nuevo el apellido");
		}

		
//a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años. Sin poder resolver
		switch(vacunasIngresadas){
			case 0:
				if(edadIngresada >=60){
					pacientesSinVacunas=pacientesSinVacunas+vacunasIngresadas;
					totalPacientesVAcunas=pacientesSinVacunas;
					contadorSinVacunas++;
				}
				break;
				
				//b)el menor paciente que tenga 1 dosis o más, su nombre y su edad.
			default:
					if(edadIngresada < minimaEdad|| banderaDelPrimero==0)
					{
						minimaEdad=edadIngresada;
						
						banderaDelPrimero++;
					}
				break;	
		}


		//c)el doctor que más pacientes tuvo, sacar el promedio de edades.
		switch(doctor)
		{
			case"perez":
			acumuladorEdadPerez = acumuladorEdadPerez + edadIngresada;
			contadorPerez++;
			break;
			case"lopez":
			acumuladorEdadLopez = acumuladorEdadLopez + edadIngresada;
			contadorLopez++;
			break;
			default:
			acumuladorEdadDiaz = acumuladorEdadDiaz + edadIngresada;
			contadorDiaz++;
			break;
		}

	respuesta=prompt("quiere seguir ingresando datos?");
	contador++;
	}
	
	//c)el doctor que más pacientes tuvo, sacar el promedio de edades.

	if(contadorDiaz> contadorLopez && contadorDiaz> contadorPerez)
	{
		//diaz laburado mas
		doctorMasPacientes= acumuladorEdadDiaz/contadorDiaz;
	}else{
		if(contadorLopez>contadorPerez)
		{
			//lopez laburo mas
			doctorMasPacientes= acumuladorEdadLopez/contadorLopez;
		}
		else
		{
			//laburo perez mas
			doctorMasPacientes= acumuladorEdadPerez/contadorPerez;
		}
	}

	//a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años. Sin poder resolver
	document.write("Pacientes sin vacunas: "+totalPacientesVAcunas);
	//b)el menor paciente que tenga 1 dosis o más, su nombre y su edad.
	document.write("el menor paciente que tenga 1 dosis o más es:"+ datosPaciente + "y su edad:"+minimaEdad);
	//c)el doctor que más pacientes tuvo, sacar el promedio de edades.
	document.write("Pacientes sin vacunas: "+totalPacientesVAcunas);

*/







	/* Ejercicio 2
	una pinturería solicita nuestros servicios para desarrollar el siguiente programa:
	tomar 5 pedidos
		
	cantidad de litros validar (mayor a 0).
	precio por litro validar (no puede ser menor a 4000).
	marca validar (tersuave, colorin, plavicon).
	Color.
		
	a) la cantidad de litros que se compró en total.
	b) de la compra más cara, mostrar su color y marca.
	c)mostrar la cantidad total de importe por las ventas y si supera los 50000 mostrar un mensaje el siguiente mensaje:” usted es un gran vendedor”.
		
	 
	let pedido=0;
	let cantidadLitros;
	let precioLitro;
	let marcaPintura;
	let color;
	let sumaLitros=0;
	let totalLitros;
	let banderaLitros=0;

	
	
	

	while(pedido<2)
	{
		//valido los datos

		cantidadLitros = parseInt(prompt("Ingrese la cantidad de litros q va a ingresar(mayor a 0)"));
		while(cantidadLitros<0)
		{
			vacunasIngresadas = parseInt(prompt("Dato incorrecto, ingrese la cantidad de litros q va a ingresar(mayor a 0)"));
		}
		
		precioLitro = parseInt(prompt("Ingrese el precio por litro(no puede ser menor a 4000)"));
		while(precioLitro<4000)
		{
			precioLitro = prompt("Dato ingresado incorrecto, Ingrese el precio por litro(no puede ser menor a 4000)");
		}

		marcaPintura = prompt("Ingrese la marca de la pintura(tersuave, colorin, plavicon)");
		while(marcaPintura != "tersuave" && marcaPintura !="colorin" && marcaPintura !="plavicon")
		{
			marcaPintura = prompt("Dato incorrecto, ingrese de nuevo la marca de la pintura(tersuave, colorin, plavicon)");
		}
		color = prompt("Ingrese el color de la pintura");

		/**
		a) la cantidad de litros que se compró en total.
		b) de la compra más cara, mostrar su color y marca.
		c)mostrar la cantidad total de importe por las ventas y si supera los 50000 mostrar un mensaje el siguiente mensaje:” usted es un gran vendedor”.
		 */
/*
		if(cantidadLitros){
			sumaLitros=sumaLitros+cantidadLitros;
			totalLitros=sumaLitros;
			banderaLitros=1;
		}
	
	pedido++;
	}
	document.write("cantidad de litros: " + totalLitros);
}*/



















































/**
 * let contador=0;
	let productoIngresado;
	let precio;
	let cantUnidad;
	let marca;
	let fabricante;
	let acumuladorUnidadesJabones=0;
	let cantidadUnidadesMinimo;
	let fabricanteAlcoholMinimo;
	let precioAlcoholMinimo=0;
	let banderaPrimeroAlcohol=0;
	let contadorJabon=0;
	let acumuladorUnidadesAlcohol;
	let contadorAlcohol=0;
	let	acumuladorUnidadesBarbijo;
	let contadorBarbijo=0;

	while(contador < 5)
	{
		//validamos
		productoIngresado = prompt("Ingrese el tipo de producto (barbijo , jabon o alcohol)");
		while(productoIngresado !="alcohol" && productoIngresado !="jabon" && productoIngresado !="barbijo")
		{
			productoIngresado = prompt("Reingrese el tipo de producto (barbijo , jabon o alcohol) ");
		}

		precio=parseInt( prompt("ingrese  un precio (entre 100 y 300)"));
		while(precio< 100 || precio > 300)
		{
			precio=parseInt( prompt("Reingreso  un precio (entre 100 y 300)"));
		}
		
		/*do{
			cantUnidad = parseInt(prompt("ingrese la cantidad de unidades (1-1000)"));

		}while(cantUnidad <1 || cantUnidad >1000);

		cantUnidad=parseInt(prompt("ingrese la cantidad de unidades (1-1000)"));
		while(cantUnidad <1 || cantUnidad >1000)
		{
			cantUnidad=parseInt(prompt("Reingrese la cantidad de unidades (1-1000)"));
		}

		marca=prompt("ingrtese la maraca");
		fabricante=prompt("ingrese fabricante");
		
		//c
		/*if(productoIngresado =="jabon")
		{

			acumuladorUnidadesJabones= acumuladorUnidadesJabones+ productoIngresado;
		}
		else
		{
			//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
			if(productoIngresado =="alcohol")
			{
				if(precioAlcoholMinimo> precio || banderaPrimeroAlcohol==0){
					precioAlcoholMinimo=precio;
					fabricanteAlcoholMinimo=fabricante;
					cantidadUnidadesMinimo= cantUnidad;
					banderaPrimeroAlcohol=1;
				}
			}
		}

		//a-b-c
		switch(productoIngresado)
		{
			case "jabon":
				acumuladorUnidadesJabones= acumuladorUnidadesJabones+ productoIngresado;
				contadorJabon++;
				break;
			case "alcohol":
				if(precioAlcoholMinimo> precio || banderaPrimeroAlcohol==0){
					precioAlcoholMinimo=precio;
					fabricanteAlcoholMinimo=fabricante;
					cantidadUnidadesMinimo= cantUnidad;
					banderaPrimeroAlcohol=1;
				}
				acumuladorUnidadesAlcohol=acumuladorUnidadesAlcohol + cantUnidad;
				contadorAlcohol++;
				break;
				
			case"barbijo":
				acumuladorUnidadesBarbijo=acumuladorUnidadesBarbijo +cantUnidad;
				contadorBarbijo+=1;
				break;
		}
		
		contador++;
	}
	//b) del tipo con mas unidades, el promedio por mas compra
	//comprar cantidades de unidades
	//definir quien tiene mas y ahi hacemos los promedios
	/**
	 comparaciones:
	 -cantidadJabon mayor a  cantidadAlcohol && cantidadJabon mayor a cantidadBarbijo

	 
	alert(productoIngresado)
}


/**
  condicion== verdadera
  whille (condicion)//mientras  sea verdadera vuelce a ingresar
  {
	
  }

  do{

  }while (condicion)//
 */
 