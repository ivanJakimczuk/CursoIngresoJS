//Ingrese 5 personas cada uno con su edad y deme el promedio de edad 
function mostrar()
{
    let nombre;
    let edad;
    let promedio;
    let acumuladorEdades=0;
    let contador=0;

    while(contador<3)
    {
        nombre=prompt("Ingrese su nombre");
        edad=parseInt (prompt("ingrese su edad"));
        acumuladorEdades=acumuladorEdades+edad;
    
        contador++;
    }

   promedio=acumuladorEdades/3;
   document.write(promedio);
}
