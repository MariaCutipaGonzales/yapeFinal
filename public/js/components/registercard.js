"use strict";

const Card = (update)=>{
	const card = $('<section class="codeuser row"></section>');
	const img = $('<img src="img/icons/bcp-logo.png" class="mtop10"/>');
    const info = $('<div class="col s12"><h1 class="bold">Registra tu  tarjeta débito BCP</h1><p class="info font3">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.</p></div>');

    const inputCard = $('<input type="text" maxlength="16" class="mtop10"/>');
    const scan = $('<a href="#""><img src="img/icons/scan.png">Escanear tarjeta</a>');

    const divFecha = $('<div class="col s12 row"><p class="font3">Fecha de vencimiento</p></div>');
    const month = $('<input class="fvencimiento" type="number" />');
    const slash = $('<span>/</span>');
    const year = $('<input class="fvencimiento" type="number" />');

    divFecha.append(month);
    divFecha.append(slash);
    divFecha.append(year);

    card.append(img);
    card.append(info);
    card.append(inputCard);
    card.append(scan);
    card.append(divFecha);

   function validate(){
   	
   }
    return card;
}