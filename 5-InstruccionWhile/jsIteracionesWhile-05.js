/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.

*Apellido y nombre: Jakimcuk Ivan
 * ej: while n°5
 * entregado
 * */
function mostrar()
{
	let sexoIngresado;
	let mensaje;

	sexoIngresado= prompt("Ingrese f si sos Femenina o m si sos Masculino");
	

	while(sexoIngresado !="f" && sexoIngresado !="m"){
		alert("Dato invalido");
		sexoIngresado= prompt("Ingrese f paraFemenino o m paraMasculino en minuscula.")
		
	}
	switch(sexoIngresado){
		case "f":
			mensaje="Usted es Femenino";
			break;
		case "m":
			mensaje= "Usted es Masculino";
			break;
	}
	/*
	if(sexoIngresado == "f"){
		mensaje="Usted es Femenino";
		
	}else{
		if(sexoIngresado == "m"){
			mensaje="Usted es Masculino";
		}
	}
	*/
	document.getElementById("txtIdSexo").value= mensaje;
}//FIN DE LA FUNCIÓN

//Primera vez haciendo el ejercicio
/*
var sexoIngresado;
	var mensaje;

	sexoIngresado = prompt("ingrese F ó M .");
	
	while(sexoIngresado !="f" && sexoIngresado !="m")
	{	
		alert("Dato invalido");
		sexoIngresado = prompt("Por favor, ingrese F ó M en minuscula");
		
		s

		/*if(sexoIngresado=="f")
		{
			mensaje="Usted es Femenino";
		}
		else
		{
		 if(sexoIngresado =="m")
			{
				mensaje="Usted es Masculino";
			}
		}
		document.getElementById("txtIdSexo").value = mensaje;
	}*/