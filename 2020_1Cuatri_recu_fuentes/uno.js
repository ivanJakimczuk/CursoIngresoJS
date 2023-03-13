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

Apellido y nombre:Jakimczuk Ivan;
*/


function mostrar()
{
	
	var contador=0;
	var respuesta="si";
	var nombreMascota;
	var vacunaAntirrabia;
	var masacotaIngresada;
	var pesoMascota;
	var edadMascota;
	var nombreVeterinario;

	var banderaMasJoven=0;
	var nombreMascotaJoven;
	var edadMinima;

	var gatoPesado;
	var nombreGatopesado;
	var banderaGatoMasPesado=0;

	var contadorDiaz=0;
	var contadorPerez=0;
	var contadorLopez=0;
	var nombreVeterinarioMasPacientes;
	var veterinarioMasAnimales;

	


	while(respuesta== "si")
	{
		//valido los datos
		nombreMascota=prompt("Ingrese el nombre de su mascota.");

		/*vacunasIngresadas=parseInt(prompt("Ingrese cuantas vacunas tiene aplicadas(0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)"));
		while(vacunasIngresadas !=0 && vacunasIngresadas !=1 && vacunasIngresadas !=2 && vacunasIngresadas !=3)
		{
			vacunasIngresadas=prompt("Ingrese cuantas vacunas tiene aplicadas(0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)");
		}*/
		vacunaAntirrabia=prompt("Ingrese 'si' su mascota tiene la vacuna antirrabia en caso de no tenerla ingrese 'no'.");
		while(vacunaAntirrabia != "si" && vacunaAntirrabia != "no")
		{
			alert("Dato incorrecto")
			vacunaAntirrabia=prompt("Ingrese'si' o 'no' en minuscula. )");
		}
		
		masacotaIngresada=prompt("Ingrese que tipo de mascota tiene(perro,gato,jirafa)");
		while(masacotaIngresada !="perro" && masacotaIngresada!="gato" && masacotaIngresada!="jirafa")
		{
			masacotaIngresada=prompt("Dato ingresado incorrecto, Ingregese perro o gato o jirafa en miniscula");
		}

		pesoMascota=parseInt(prompt("Ingrese el peso de la mascota"));
		while(pesoMascota <0)
		{
			pesoMascota =prompt("Dato incorrecto,el peso de la mascota debe ser mayor a 0");
		}

		edadMascota=parseInt(prompt("Ingrese la edad de la mascota"));
		while(edadMascota<0)
		{
			edadMascota=prompt("La edad de la mascota no debe ser negativa");
		}
		
		nombreVeterinario=prompt("Ingrese el apellido del Veterinario (“perez”, “lopez”,”diaz”)");
		while(nombreVeterinario!="perez" && nombreVeterinario!="lopez" && nombreVeterinario!="diaz")
		{
			nombreVeterinario= prompt("El apellido del veterinario es incorrecto, por favor ingreselo devuelta (“perez”, “lopez”,”diaz”)")
		}
		
		
		//a) Nombre de la mascota que tenga la vacuna antirrábica y que sea la más joven.
		if(vacunaAntirrabia=="si")
		{		
			if(edadMascota < edadMinima|| banderaMasJoven==0)
			{
				edadMinima=edadMascota;
				nombreMascotaJoven=nombreMascota;
				banderaMasJoven=1;
			}
		}
		//b) El gato más pesado que se atendió.
		if(masacotaIngresada=="gato")
		{
			if(pesoMascota > gatoPesado ||banderaGatoMasPesado==0)
			{
				gatoPesado=pesoMascota;
				nombreGatopesado=nombreMascota;
				banderaGatoMasPesado=1;
			}
		}

		//c) El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.
			switch(nombreVeterinario)
			{
				case "diaz":
					contadorDiaz++;
					break;
				case "lopez":
					contadorLopez++;
					break;
				case "perez":
					contadorPerez++;
					break;

			}


		respuesta=prompt("Desea seguir ingresando datos? si/no en minuscula");
	}
	
	
	if(contadorLopez>contadorDiaz && contadorLopez>contadorPerez)
	{
		veterinarioMasAnimales=contadorLopez;
		nombreVeterinarioMasPacientes="Lopez"
	}
	else
	{
		if(contadorDiaz>contadorPerez)
		{
			veterinarioMasAnimales=contadorDiaz;
			nombreVeterinarioMasPacientes="Diaz"
		}
		else
		{
			veterinarioMasAnimales=contadorDiaz;
			nombreVeterinarioMasPacientes="perez"
		}
	}



	//a) Nombre de la mascota que tenga la vacuna antirrábica y que sea la más joven.
	document.write("Nombre de la mascota que tenaa la vacuna antirrabia y que sea la mas joven es:" + nombreMascotaJoven + " con " + edadMinima+" de edad" +"<br>");
	//b) El gato más pesado que se atendió.
	document.write("El nombre gato más pesado que se atendió" + nombreGatopesado+" pesando " + gatoPesado);
	//c) El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.
	document.write("El veterinario que más pacientes tuvo: "+ nombreVeterinario + "<br>"+
	"Nombres de las mascotas: "+ nombreMascota+"<br>"+
	"Cuantos animales atendio: "+veterinarioMasAnimales);	
}

















/**
 * 
 * 	var edadMasJoven;
	var edadMinima=0;
	var nombreMascotaJoven;
	var banderaMascotaJoven=0;

	var banderaMasPesado=0;
	var pesoGatoMaximo;

	var contadorLopez=0;
	var contadorDiaz=0;
	var contadorPerez=0;

	var veterinarioMasAnimales;
 * //a) Nombre de la mascota que tenga la vacuna antirrábica y que sea la más joven.
		
				if(vacunaAntirrabia=="si" ){
					if(edadMinima>edadMascota ||banderaMascotaJoven==0 )
					{
						edadMasJoven=edadIngresada;
						nombreMascotaJoven=nombreMascota;
						banderaMascotaJoven=1;
					}
				}
		//b) El gato más pesado que se atendió.
		if(masacotaIngresada=="gato")
		{
			if(pesoMascota>pesoGatoMaximo || banderaMasPesado==0)
			{
				pesoGatoMaximo=pesoMascota;
				banderaMasPesado=1;
			}
		}

		//c) El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.
			switch(nombreVeterinario)
			{
				case "diaz":
					contadorDiaz++;
					break;
				case "lopez":
					contadorLopez++;
					break;

				default:
					contadorPerez++;
					break;
			}	

			respuesta=prompt("deses seguir ingresando dato? si/no")
	}





	if(contadorPerez>contadorLopez && contadorPerez>contadorDiaz)
	{
		veterinarioMasAnimales= contadorPerez;
		nombreMasPacientes="Perez";
	}
	else
	{
		veterinarioMasAnimales=contadorDiaz;
		nombreMasPacientes="Diaz"
	}
	//mostralo
	document.write("Nombre de la mascota que tenfaa la vacuna antirrabia y que sea laa mas joven es:" +nombreMascotaJoven)
	document.write("El nombre gato más pesado que se atendió" + pesoGatoMaximo);
	document.write("El veterinario que más pacientes tuvo: "+ nombreVeterinario + "NOmbre de laa mascotaa:"+ nombreMascota+ "Cuantos animales atendio"+veterinarioMasAnimales);



 */