/*
Apellido y nombre: Jakimczuk Ivan

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
- genero (validar "macho" o "hembra")

a)cantidad de mascostas que son machos y que atendio lopez
b)el gato hembra mas liviano que atendio perez
c)El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.
d)promedio de las edades


*/
function mostrar()
{	
	let respuesta="si";
	let nombreMascota;
	let vacunaAntirrabia;
	let tipoAnimal;
	let peso;
	let edad;
	let nombreVeterinario;
	let genero;

	//variables a
	let contadorMacho=0;

	//variables b
	let acumuladorgatoMasLiviano=0;
	let nombreGatoMasLiviano;
	let banderaGatoMasLiviano=0;

	//variables c
	let contadorDiaz=0;
	let contadorLopez=0;
	let contadorPerez=0;
	let veterinarioMasAnimales;
	let nombreVeterinarioMasPacientes;

	let acumuladorEdades=0;
	let sumaPacientes;
	let promedio;



	while(respuesta=="si")
	{	
		
			nombreMascota= prompt("Ingrese el nombre de la mascota");

			vacunaAntirrabia=prompt("Ingrese 'si' su mascota tiene la vacuna antirrabia en caso de no tenerla ingrese 'no'.");
			while(vacunaAntirrabia != "si" && vacunaAntirrabia != "no")
			{
				vacunaAntirrabia=prompt("Ingrese'si' o 'no' en minuscula. )");
			}
			
			tipoAnimal=prompt("Ingrese que tipo de mascota tiene(perro,gato,jirafa)");
			while(tipoAnimal !="perro" && tipoAnimal!="gato" && tipoAnimal!="jirafa")
			{
				tipoAnimal=prompt("Dato ingresado incorrecto, Ingregese perro o gato o jirafa en miniscula");
			}
	
			peso=parseInt(prompt("Ingrese el peso de la mascota"));
			while(peso <1)
			{
				peso =parseInt(prompt("Dato incorrecto,el peso de la mascota debe ser mayor a 0"));
			}
	
			edad=parseInt(prompt("Ingrese la edad de la mascota"));
			while(edad<0)
			{
				edad=parseInt(prompt("La edad de la mascota no debe ser negativa"));
			}
			
			nombreVeterinario=prompt("Ingrese el apellido del Veterinario (“perez”, “lopez”,”diaz”)");
			while(nombreVeterinario!="perez" && nombreVeterinario!="lopez" && nombreVeterinario!="diaz")
			{
				nombreVeterinario= prompt("El apellido del veterinario es incorrecto, por favor ingreselo devuelta (“perez”, “lopez”,”diaz”)")
			}
			genero=prompt("Ingrese el genero de la mascota");
			while(genero!="macho" && genero!="hembra")
			{
				genero=prompt("Dato incorrecto, ingrese si su mascota es 'macho' o 'hembra' en minuscula")
			}

	//a)cantidad de mascostas que son machos y que atendio lopez
	if(genero=="macho")
	{
		if(nombreVeterinario=="lopez")
		{
			contadorMacho++;
		}
	}
	else
	{
		//b)el gato hembra mas liviano que atendio perez
		if(tipoAnimal=="gato")
		{
			if(peso<acumuladorgatoMasLiviano ||banderaGatoMasLiviano==0)
			{
				acumuladorgatoMasLiviano=peso;
				nombreGatoMasLiviano=nombreMascota;
				banderaGatoMasLiviano=1;
			}
		}

	}
	//c)El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.
	switch(nombreVeterinario)
	{
		case "diaz":
			contadorDiaz++; //2
			break;
		case "lopez":
			contadorLopez++;//4
			break;
		default: // perez
			contadorPerez++;//4
			break;
	}
	//d)promedio de las edades
	acumuladorEdades+=edad; 
	//10 pacientes
	sumaPacientes= contadorDiaz+contadorLopez+contadorPerez;

		respuesta=prompt("Desea seguir ingresando datos?");
	}

	//c)El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.
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

	//d)promedio de las edades
	promedio = acumuladorEdades/sumaPacientes;



	//a)cantidad de mascostas que son machos y que atendio lopez
	document.write("La cantidad de mascotas machos q antendio lopez es de: "+ contadorMacho+"<br>")
	//b)el gato hembra mas liviano que atendio perez
	document.write("El gato hembra mas liviano que antendio perez es: "+ nombreGatoMasLiviano+"<br>")
	//c)El veterinario que más pacientes tuvo, mostrar su nombre y cuantos animales atendió.
	document.write("El veterinario que mas pacientes tuvo es: "+ nombreVeterinarioMasPacientes+"<br>"+" y cuantos animales antendio "+veterinarioMasAnimales +"<br>")
	//d)promedio de las edades
	document.write("Promedio de las edades: "+promedio );
}































/*


Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"

//muersta una ventana emergente
	alert("Esto funciona de maravilla");

	//error
	//si escribimos Alert
	alert('si funciona');
*/

