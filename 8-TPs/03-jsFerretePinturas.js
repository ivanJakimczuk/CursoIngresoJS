/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").

Apellido y nombre: Jakimczuk Ivan
Tp: N°3

*/
function FahrenheitCentigrados () 
{
	let fahrenheit ;

    let calculo;

    fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);

    calculo = (fahrenheit - 32) * 5/9; 

    alert(fahrenheit + "° Fahrenheit son " + calculo + "° centidrados.");
}

function CentigradosFahrenheit () 
{
	let centidrados ;

    let calculo;

    centidrados = parseInt(document.getElementById("txtIdTemperatura").value);

    calculo = (centidrados * 9/5 ) + 32 ; 

    alert(centidrados + "° centidrados  son " + calculo + "° Fahrenheit.");
}

//txtIdTemperatura