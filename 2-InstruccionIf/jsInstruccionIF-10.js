/**
 * Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4

 * 
 * Apellido y nombre: Jakimczuk Ivan
 * ej: I/IF 10
 */
function mostrar()
{
	let notas;
	
	notas =  Math.round(Math.random()* 10);

	if(notas>= 9)
	{
		alert("Exelente sacaste un: " + notas);
	}else{
		if(notas > 3){
			alert("Apróbo sacaste un: " + notas);
		}else
		{
			if(notas <5){
				alert("Vamos, la proximas se puede se saco un: "+ notas);
			}
		}
	}
		




}//FIN DE LA FUNCIÓN


/**
 * let examen = Math.round(Math.random()*9 + 1);
	
	if(examen >=9 )
	{
		alert(examen + " Exelente");
	}else{
			if(examen >=4 && examen <= 8){
				alert(examen + " Aprobo");
			}else
			{
				alert(examen + " Vamos, la proxima se puede");
			}
		}

 */