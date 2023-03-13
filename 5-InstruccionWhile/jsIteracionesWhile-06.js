function mostrar()
{
	var numero;
	var acumulador=0;
	var contador=0;
	

	while(contador < 5)
	{
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero ;
		

		numero++;
		contador++;
	}
	 

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;
}//FIN DE LA FUNCIÓN

/**
 * var numeroIngresado;
	let i=0; // igual q let contador le asigno 0 para q luego incremente 0 +1 y se sobrecarge y q vaya incremenntanado
	let acumulador=0;// acumulo variables
	let suma;
	let promedio;
	
	*num1=parseInt(prompt("ingrese un numero"));
	*num2=parseInt(prompt("ingrese un numero"));
	*num3=parseInt(prompt("ingrese un numero"));
	*num4=parseInt(prompt("ingrese un numero"));
	*num5=parseInt(prompt("ingrese un numero"));


	while(i < 5){
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		
		acumulador= acumulador+ numeroIngresado;

		promedio= suma/5;

		i++;//se usa para acumular valores constantes, osea incrementea o descrementa en valores fijos, por algo es i++ 
	}

	

	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;










	// solucion sin while;
	let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;
	let suma;
	let promedio;

	numero1=parseInt(prompt("Ingrese un numero"));
	numero2=parseInt(prompt("Ingrese un numero"));
	numero3=parseInt(prompt("Ingrese un numero"));
	numero4=parseInt(prompt("Ingrese un numero"));
	numero5=parseInt(prompt("Ingrese un numero"));
	
	suma = numero1+numero2+numero3+numero4+numero5;
	
	promedio = suma/5;

	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio;
	

 */