/**
 * /**
 * Apellido y nombre: Jakimczuk Ivan
 * ej: I/IF 4
 * entregado
 */
function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	
	//manera intuitiva
	//Si estoy dentro del rango
		
	if(edad >=13 && edad <=17){
		alert("Usted es adolscente");
	}
	//menos intuitiva /13 14 15 16 17/
	//si no estoy afuera del rango 
	/*if(!(edad <= 12 || edad >= 18) ){
		alert("Usted es adolscente");
	}*/
	

}//FIN DE LA FUNCIÓN

/**
 * Esta opcion esta bien pero solo para este caso
 * let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad ==13){
		alert("Usted es adolscente");
	}
	if(edad ==14){
		alert("Usted es adolscente");
	}
	if(edad ==15){
		alert("Usted es adolscente");
	}
	if(edad ==16){
		alert("Usted es adolscente");
	}
	if(edad ==17){
		alert("Usted es adolscente");
	}
 */

	/**
	 * // es un poco mas eficiente
	if(edad  >=13){
		
		if(edad <=17){

		
		alert("Usted es adolescente");
		}





		*operaadores logicos
		&& = and
		|| = or

		condicion 1 condicion 2		&&   	 ||
			f			f			f		f
			f			v			f		v
			v			f			f		v
			v			v			v		v
	 */