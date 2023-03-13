/**
 * Apellido y nombre: Jakimcuk Ivan
 * ej: SW 9
 * hecho pero no entregrado
 */
function mostrar()
{
	var estacionIngresada;
	var destinoIngresada;
	var porcentaje;
	var precioBase = 15000;
	var precioFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresada = document.getElementById("txtIdDestino").value;


	switch( estacionIngresada){
		case "Invierno":
			switch(destinoIngresada){
				case "Bariloche":
					porcentaje = 20;//Tiene un aumento
					break;
				
				case "Mar del plata":
					porcentaje = -20;//tiene un descuento
					break;
				default:
					porcentaje = -10;//tienen un descuento
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresada){
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Mar del plata":
					porcentaje = 20;
				break;
				default:
					porcentaje = 10;
					break;

			}
			break;
		default:
			switch(destinoIngresada){
				case "Cordoba":
					porcentaje=0;
					break;
				default:
					porcentaje = 10;
					break;
			}
			break;
	}
	precioFinal = precioBase + ( precioBase * porcentaje/100);
	
	alert(precioFinal);

}//FIN DE LA FUNCIÓN
//txtIdEstacion
//txtIdDestino