const impuesto = "impuesto";
const servicio = "servicio";
const tarjeta = "tarjeta";
const otros = "otros";
let tipo = "", detalle = "", ticket = "", rta = "si";
let importe = 0, tot = 0;

alert("Bienvenido al Sistema Control de Gastos...");
ticket = "Sistema Control de Gastos\n";

while ((rta = "si")) {
  tipo = prompt(`Ingrese tipo de gasto:\n
    (impuesto/servicio/tarjeta/otros)`).toLowerCase();

  if (tipo === impuesto || tipo === servicio || tipo === tarjeta || tipo === otros) {
        detalle = prompt("Ingrese descripción:").toLowerCase();  
        importe = +prompt("Ingrese importe:");
        
        while (isNaN(importe));
            if (isNaN(importe)){
                alert("El dato ingresado es invalido...!")
            }

        switch (tipo) {
            case impuesto:
                tot = tot + importe;
                ticket = ticket + `Tipo: ${impuesto}\n  Detalle: ${detalle}\n   Importe: $${importe}\n`;
                break;
            case servicio:
                tot = tot + importe;
                ticket = ticket + `Tipo: ${servicio}\n  Detalle: ${detalle}\n   Importe: $${importe}\n`;
                break;
            case tarjeta:
                tot = tot + importe;
                ticket = ticket + `Tipo: ${tarjeta}\n   Detalle: ${detalle}\n   Importe: $${importe}\n`;
                break;
            case otros:
                tot = tot + importe;
                ticket = ticket + `Tipo: ${otros}\n Detalle: ${detalle}\n   Importe: $${importe}\n`;
                break;
         }

    }else{
        alert("Opción Invalida...!");
    }
 
    rta = prompt(`¿Desea seguir cargando datos?\n
    elija su respuesta: (si/no)`);
    
    if(rta == "no"){
        break;
    }
}
alert(`${ticket}\nTotal de Gastos: $${tot}`);