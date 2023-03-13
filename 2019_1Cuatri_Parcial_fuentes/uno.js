/**
 * 
A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, validando los datos ingresados:  

nombre del titular,
lugar (“Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),  
 cantidad de días que durará el viaje.
 importe del viaje
 altura del pasajero 
 peso del pasajero 
 sexo pasajero (F o M o NB) 
 Viaja con equipaje de mano? 
 paga con mercado, tarjeta o efectivo 

 1  a- cantidad de personas que viajan en cada temporada 
 b- el peso acumulado de todos los que viajan a Villa Gessel 
 c- el lugar con la mayor cantidad de días acumulados 
 d- la suma de todos los importes  
 
 2 e-el nombre del más pesado de los pasajeros y el del más liviano 
 f-el lugar donde se pagó el mayor importe 
 g-el nombre de la mujer más alta 
 
 3 h- Cuál fue la forma de pago más utilizada 
 i- en qué temporada se viajó más  
 j- qué lugar tuvo más pasajeros  
 
 4 k- qué porcentaje usa equipaje de mano 
   l- que porcentaje hay de cada sexo 
   m- promedio de los importes
 








   una pintureria toma 5 pedidos
cantidad de litros validar (mayor a 0).
precio por litro validar (no puede ser menor a 4000).
marca validar (tersuave, colorin, plavicon).
Color.
a) la cantidad de litros que se compró en total.
b) de la compra más cara, mostrar su color y marca.
c)mostrar la cantidad total de importe por las ventas y si supera los 50000 mostrar un mensaje el siguiente mensaje:” usted es un gran vendedor”.


porcentajeEquipaje = 100-((contadorPasajerosTotal-contadorEquipajeMano)/contadorPasajerosTotal*100);*/

function mostrar()
{
    let nombreTitular;
    let lugar;
    let temporada;
    let importeDelViaje;
    let cantidadDeDias;
    let alturaDelPasajero;
    let pesoDelPasajero;
    let sexoPasajero;
    let equipaje;
    let metodoDePago;
    let respuesta="si";

    let contadorTemporadaAlta=0;
    let contadorTemporadaBajas=0;

    let acumuladorPeso=0;

    let acumuladorDiasPuertoMadryn=0;
    let acumuladorDiasVillaGessel=0;
    let acumuladorDiasCordoba=0;
    let lugarConMasDias;

    let acumuladorImporteViaje=0;

    let pasajeroMasPesado;
    let nombreMasPesado;
    let banderaMasPesado=0;
    let nombreMasLiviano;
    let pasajeroMasLiviano;
    let banderaMasLiviano=0;

    let acumuladorImporteVillaGessel=0;
    let acumuladorImporteCordoba=0;
    let acumuladorImportePuertoMadrym=0;
    let lugarDondeSePagoMas;

    let mujerMasAlta;
    let nombreDeLaMujerMasAlta;
    let banderaMujerMasAlta=0;

    let contadorMercadoPago=0;
    let contadorTarjeta=0;
    let contadorEfectivo=0;
    let formaDePagoMasUtilizado; 

    let temporadaMasViajes=0;

    let acumuladorPasajerosCordoba=0;
    let acumuladorPasajerosVillaGessel=0;
    let acumuladorPasajerosPuertoMadrym=0;
    let masPasajeros;

    let acumuladorEquipajeDeMano=0;
    
    while(respuesta=="si")
    {
        nombreTitular=prompt("Ingrese el nombre del titular");

        lugar=prompt("Ingrese el lugar a donde quiere viajar(“Puerto Madryn”, “Villa Gessel” o “Cordoba”)");
        while(lugar!="puerto madryn" && lugar!="villa gessel" && lugar!="cordoba")
        {
            lugar=prompt("Incorrecto, ingrese de nuevo a donde quiere viajar(“Puerto Madryn”, “Villa Gessel” o “Cordoba”) en minuscula");
        }

        temporada=prompt("Ingrese la temporada(“alta”, “baja”)");
        while(temporada!="alta" && temporada!="baja"){
            temporada=prompt("dato incorrecto, ingrese de nuevo si es(“alta”, “baja”) en minuscula");
        }

        cantidadDeDias=parseInt(prompt("Ingrese los dias que va a estar"));
        while(cantidadDeDias< 1){
            cantidadDeDias=prompt("No debe ser menor a 1");
        }

        importeDelViaje=parseInt(prompt("Ingrese el importe del viaje"));
        while(importeDelViaje<1000){
            importeDelViaje=prompt("Incorrecto, debe superar los 1000");
        }

        alturaDelPasajero=parseInt(prompt("Ingrese la altura del pasajero"));
        while(alturaDelPasajero<0){
            alturaDelPasajero=prompt("no debe ser menor a 0");
        }

        pesoDelPasajero=parseInt(prompt("Ingrese el peso del pasajero"));
        while(pesoDelPasajero<0){
            pesoDelPasajero=prompt("Debe ser mayor a 0");
        }

        sexoPasajero=prompt("Ingrese 'f' para femenino, 'm' masculino 'nb' no binario");
        while(sexoPasajero!="f"&& sexoPasajero!="m" && sexoPasajero!="nb"){
            sexoPasajero=prompt("Dato ingresado incorrecto,Ingrese 'f' para femenino, 'm' masculino 'nb' no binario en minuscula");
        }

        equipaje=prompt("Viaja con equipaje de mano?");
        while(equipaje!="si"&& equipaje!="no"){
            equipaje=prompt("Dato incorrecto, ingrese si/no");
        }   

        metodoDePago=prompt("Paga con mercado pago, tarjeta o efectivo");
        while(metodoDePago!="tarjeta"&& metodoDePago!="efectivo" && metodoDePago!="mercado pago"){
            metodoDePago=prompt("Dato incorrecto, ingrese si paga con'tarjeta', 'efectivo' o 'mercado pago' en minuscula");
        }
    //1  a- cantidad de personas que viajan en cada temporada 
    switch(temporada)
    {
        case "alta":
            contadorTemporadaAlta++;
            break;

            default:
            contadorTemporadaBajas++;
            break;
    }

    //b- el peso acumulado de todos los que viajan a Villa Gessel 
    if(lugar=="Villa Gessel")
    {
        acumuladorPeso=acumuladorPeso+pesoDelPasajero;
    }

    //c- el lugar con la mayor cantidad de días acumulados 
    //f-el lugar donde se pagó el mayor importe \
    //j- qué lugar tuvo más pasajeros 
    switch(lugar){
        case"Cordoba":
        acumuladorDiasCordoba=acumuladorDiasCordoba+cantidadDeDias;
        acumuladorImporteCordoba = acumuladorImporteCordoba+ importeDelViaje;
        acumuladorPasajerosCordoba++;
        break;
        case"Villa Gessel":
        acumuladorDiasVillaGessel=acumuladorDiasVillaGessel+cantidadDeDias;
        acumuladorImporteVillaGessel = acumuladorImporteVillaGessel+ importeDelViaje;
        acumuladorPasajerosVillaGessel++;
        break;
        case"Puerto Madryn":
        acumuladorDiasPuertoMadryn=acumuladorDiasPuertoMadryn+cantidadDeDias;
        acumuladorImportePuertoMadrym = acumuladorImportePuertoMadrym+ importeDelViaje;
        acumuladorPasajerosVillaGessel++;
        break;
    }

    //d- la suma de todos los importes  
    acumuladorImporteViaje=acumuladorImporteViaje+importeDelViaje;



    //2 e-el nombre del más pesado de los pasajeros y el del más liviano 
    if(pesoDelPasajero>pasajeroMasPesado || banderaMasPesado==0){
        pasajeroMasPesado=pesoDelPasajero;
        nombreMasPesado=nombreTitular;
        banderaMasPesado=1;
    }

    if(pesoDelPasajero>pasajeroMasLiviano|| banderaMasLiviano==0)
    {
        pasajeroMasLiviano=pesoDelPasajero;
        nombreMasLiviano=nombreTitular;
        banderaMasLiviano=1;
    }
    
    //g-el nombre de la mujer más alta 
    if(sexoPasajero=="M"){
        if(alturaDelPasajero>mujerMasAlta||banderaMujerMasAlta==0)
        {
            mujerMasAlta=alturaDelPasajero;
            nombreDeLaMujerMasAlta=nombreTitular;
            banderaMujerMasAlta=1;
        }
    }
    //3 h- Cuál fue la forma de pago más utilizada 
    switch(metodoDePago)
    {
        case "efectivo":
        contadorEfectivo++;
        break;

        case "mercado pago":
        contadorMercadoPago++;
        break;

        case "tarjeta":
        contadorTarjeta++;
        break;
    }
        

   

    //l- que porcentaje hay de cada sexo 

    //m- promedio de los importes




    

        respuesta=prompt("Desea seguir ingresando datos?");
    }



    //c- el lugar con la mayor cantidad de días acumulados
    
    if(acumuladorDiasCordoba>acumuladorDiasPuertoMadryn && acumuladorDiasCordoba>acumuladorDiasVillaGessel)
    {
        lugarConMasDias="Córdoba";
    }
    else
    {
        if(acumuladorDiasPuertoMadryn>acumuladorDiasVillaGessel)
        {
            lugarConMasDias="Puerto Madryn";
        }
        else
        {
            lugarConMasDias="Villa Gessel";
        }
    }
    

    //3 h- Cuál fue la forma de pago más utilizada 
    if(contadorEfectivo>contadorMercadoPago && contadorEfectivo>contadorTarjeta)
    {
        formaDePagoMasUtilizado="efectivo";
    }
    else
    {
        if(contadorMercadoPago>contadorTarjeta)
        {
            formaDePagoMasUtilizado="mercado pago";
        }
        else
        {
            formaDePagoMasUtilizado="tarjeta";
        }
    }

    //f-el lugar donde se pagó el mayor importe  
    if(acumuladorImporteCordoba>acumuladorImportePuertoMadrym && acumuladorImporteCordoba>acumuladorImporteVillaGessel)
    {
        lugarDondeSePagoMas="Cordoba";
    }
    else{
        if(acumuladorImportePuertoMadrym>acumuladorImporteVillaGessel)
        {
            lugarDondeSePagoMas="Puerto Madrym";
        }
        else
        {
            lugarDondeSePagoMas="Villa Gessel";
        }
    }
    //i- en qué temporada se viajó más 
    if(contadorTemporadaAlta>contadorTemporadaBajas){
        temporadaMasViajes="Altas";
    }else{
        temporadaMasViajes="Bajas";
    }

    //j- qué lugar tuvo más pasajeros 
    if(acumuladorPasajerosCordoba>acumuladorPasajerosPuertoMadrym &&acumuladorPasajerosCordoba>acumuladorPasajerosVillaGessel){
        masPasajeros="Cordoba";
    }else{
        if(acumuladorPasajerosPuertoMadrym>acumuladorPasajerosVillaGessel)
        {
            masPasajeros="Puerto Madrym"
        }
        else{
            masPasajeros="Villa Gessel"
        }
    }
    //4 k- qué porcentaje usa equipaje de mano 
    porcentajeEquipaje = 100-((contadorPasajerosTotal-contadorEquipajeMano)/contadorPasajerosTotal*100);


    //b- el peso acumulado de todos los que viajan a Villa Gessel 
    document.write("El peso acumulado es: "+ acumuladorPeso +"<br>");
    
     //d- la suma de todos los importes
    document.write("La suma de todos los importes es: "+ acumuladorImporteViaje);
    
}
