/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

Apellido y nombre: Jakimcuk Ivan
 * ej: Tp 4
*entregado


 */
function CalcularPrecio () 
{
 	let cantLamparitas;
    let precioLamp = 35;
    let precioSinDescuento;
    let descuento;
    let precioFinal;
    let marca;
    let porcentaje;

    
    cantLamparitas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    precioSinDescuento = precioLamp * cantLamparitas;
    porcentaje = 0;

    switch(cantLamparitas){
        case 1:
        case 2:
            porcentaje=0;            
            break;

        case 3:
                if(marca == "ArgentinaLuz"){
                    porcentaje = 15;
                 }else{
                    if(marca == "FelipeLamparas"){
                         porcentaje = 10; 
                    }else{
                        porcentaje = 5;
                        }
                    }
            break;

        case 4:
            if(marca == "ArgentinaLuz" || marca =="FelipeLamparas"){
                porcentaje = 25; 
            }else{
                porcentaje = 20;
            }
            break;

        case 5:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }else{
                porcentaje=30;
            }
            break; 

        case 6:
            porcentaje=50;
            break;
        default:
            porcentaje=50;
            break;
    }
    
         
        descuento = precioSinDescuento * porcentaje/100;
        precioFinal = precioSinDescuento - descuento; 
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
         
        if(precioFinal > 120){
            let ingresoBruto;
            let impuestoFinal;
    
            ingresoBruto = precioFinal * 10/100;
            impuestoFinal = precioFinal + ingresoBruto;
            alert("IIBB Usted pago" + impuestoFinal);
            
            document.getElementById("txtIdprecioDescuento").value = impuestoFinal;
        }      
 }
//txtIdCantidad
/**
 * //como hacerlo pero diferente forma
 *  cantLamparitas = parseInt(document.getElementById("txtIdCantidad").value);

    if(cantLamparitas >=6){
        precioSinDescuento = precioLamp*cantLamparitas;
        descuento = precioSinDescuento * 50/100;
        precioFinal = precioSinDescuento - descuento ;

        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }else{
        precioFinal = precioLamp*cantLamparitas;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }

















    
 * //Primer tp Solo con if
    
    if(cantLamparitas >=6){

        porcentaje = 50;
        
    }else{
        if(cantLamparitas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }else{
                porcentaje=30;
            }

        }else{
            if(cantLamparitas == 4)
            {
                if(marca == "ArgentinaLuz" || marca =="FelipeLamparas"){
                    porcentaje = 25; 
                }else{
                    porcentaje = 20;
                }

            }else{
                if(cantLamparitas == 3){
                    if(marca == "ArgentinaLuz"){
                        porcentaje = 15;
                     }else{
                        if(marca == "FelipeLamparas"){
                             porcentaje = 10; 
                        }else{
                            porcentaje = 5;
                            }
                        }    
                    }
                }
            }
        }

    descuento = precioSinDescuento * porcentaje/100;
    precioFinal = precioSinDescuento - descuento; 
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    
    if(precioFinal < 120){
        let ingresoBruto;
        let impuestoFinal;

        ingresoBruto = precioFinal * 10/100;
        impuestoFinal = precioFinal + ingresoBruto;
        alert("IIBB Usted pago" + impuestoFinal);
        
        document.getElementById("txtIdprecioDescuento").value = impuestoFinal;
    } 





    

















    *
    // IF/Swich
    
   if(cantLamparitas == 6){
    porcentaje = 50;
   }else{

    if(cantLamparitas == 5){
        switch(marca){
            case "ArgentinaLuz":
                    porcentaje = 40;
                    break;
            default:
                porcentaje = 30;
                break;
        }
            
    }else{
        if(cantLamparitas == 4){
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = 25;
                    break;
                default:
                    porcentaje = 20;
                    break;
            }
        }
        else{
            if(cantLamparitas == 3){
                switch(marca){
                    case "ArgentinaLuz":
                        porcentaje = 15;
                        break;
                    case "FelipeLamparas":
                        porcentaje = 10;
                        break;
                    default:
                        porcentaje = 5;
                        break;
                }
            }
        }
    }
}     


     
    descuento = precioSinDescuento * porcentaje/100;
    precioFinal = precioSinDescuento - descuento; 
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
     
    if(precioFinal < 120){
        let ingresoBruto;
        let impuestoFinal;

        ingresoBruto = precioFinal * 10/100;
        impuestoFinal = precioFinal + ingresoBruto;
        alert("IIBB Usted pago" + impuestoFinal);
        
        document.getElementById("txtIdprecioDescuento").value = impuestoFinal;
    } 


























 *
    //Switch-If
    switch(cantLamparitas){
        case 1:
        case 2:
            porcentaje=0;            
            break;

        case 3:
                if(marca == "ArgentinaLuz"){
                    porcentaje = 15;
                 }else{
                    if(marca == "FelipeLamparas"){
                         porcentaje = 10; 
                    }else{
                        porcentaje = 5;
                        }
                    }
            break;

        case 4:
            if(marca == "ArgentinaLuz" || marca =="FelipeLamparas"){
                porcentaje = 25; 
            }else{
                porcentaje = 20;
            }
            break;

        case 5:
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }else{
                porcentaje=30;
            }
            break; 
            
        case 6:
            porcentaje=50;
            break;
    }
    
         
        descuento = precioSinDescuento * porcentaje/100;
        precioFinal = precioSinDescuento - descuento; 
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
         
        if(precioFinal < 120){
            let ingresoBruto;
            let impuestoFinal;
    
            ingresoBruto = precioFinal * 10/100;
            impuestoFinal = precioFinal + ingresoBruto;
            alert("IIBB Usted pago" + impuestoFinal);
            
            document.getElementById("txtIdprecioDescuento").value = impuestoFinal;
        } 
























 *
    //Swich-Swich
      /////A
    switch(cantLamparitas){
        case 6:
            switch(marca){
                default:
                    porcentaje = 50;
                    break;
            }
            break;

        ////////////////////////////B  
        case 5:
            switch(marca){
                case "ArgentinaLuz":
                    porcentaje=40;
                    break;
                default:
                    porcentaje = 30;
                    break;
            }
            break;

        ////////////////////////////C
        case 4:
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = 25;
                    break;
                default:
                    porcentaje =20;
                    break;
            }
            break;



        ////////////////////////////D
        case 3:
            switch(marca){
            case "ArgentinaLuz":
                porcentaje = 15;
                break;
            case "FelipeLamparas":
                porcentaje = 10;
                break;
            default:
                porcentaje = 5;
                break;
            }
            break;


        ////////////////////////////Mayor a 6
            //Correcion: me olive q en los caso de 1 y 2 me toma el 50 porcietno, por eso tengo q agregar el 1 y 2 del case y que sea =0
            case 1:
            case 2:
                porcentaje=0;
                break;
            //
        default:
            porcentaje = 50;
            break;
    }
     
    descuento = precioSinDescuento * porcentaje/100;
    precioFinal = precioSinDescuento - descuento; 
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
     
    //////E
    if(precioFinal > 120){
        var ingresoBruto;
        var impuestoFinal;

        ingresoBruto = precioFinal * 10/100;
        impuestoFinal = precioFinal + ingresoBruto;
        alert("IIBB Usted pago " + impuestoFinal);
        
        document.getElementById("txtIdprecioDescuento").value = impuestoFinal;
    } 
 

 */