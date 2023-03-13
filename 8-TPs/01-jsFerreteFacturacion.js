/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

Apellido y nombre: Jakimczuk Ivan
Tp: N°1

*/


function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;  

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioUno").value);

    resultado = precioUno + precioDos + precioTres; 

    alert("la suma de los tres productos es: " + resultado);
}
function Promedio () 
{

    let precioUno;
    let precioDos;
    let precioTres;
    let resultado; 

	precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioUno").value);

    resultado = precioUno+ precioDos + precioTres /3;
    
    alert("la el promedio de los tres productos es: " + resultado);
}
function PrecioFinal () 
{   

    let precioUno;
    let precioDos;
    let precioTres;
    let suma; 
    let iva;
    
	precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioUno").value);

    suma = precioUno + precioDos + precioTres;
    
    iva = suma * 1.21;

    alert("la el precio final de los tres productos es: " + iva);
}
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres