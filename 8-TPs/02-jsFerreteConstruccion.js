/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

Apellido y nombre: Jakimczuk Ivan
Tp: N°2

*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let calculoPerimetro;
    let alambre;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    calculoPerimetro = ancho * 2 + largo * 2;
    
    alambre = calculoPerimetro * 3;

    alert("Necesita: " + alambre + "cm de alambre")
}
function Circulo () 
{
	let radio;
    let calculoRadio;
    let PI = 3.14;
    let alambre;


    //10
    radio = parseInt(document.getElementById("txtIdRadio").value);  
 
    calculoRadio = 2 * PI *radio;

    alambre = calculoRadio * 3;

    
    alert("Debe comprar: " + alambre + "cm de alambre")
}
function Materiales () 
{ 
    let largo;
    let ancho;
    let calculoPiso;
    let calculoBolsas;
    let calculoCal;
  
    largo = parseInt(document.getElementById("txtIdLargo").value);

    ancho = parseInt(document.getElementById("txtIdAncho").value);
    
    calculoPiso = largo * ancho;

    calculoBolsas = calculoPiso * 2;

    calculoCal = calculoPiso *3;

    alert("Necesita " + calculoBolsas +" bolsas de cemento y " + calculoCal +" de cemento");
}
//txtIdLargo
//txtIdAncho
//txtIdRadio