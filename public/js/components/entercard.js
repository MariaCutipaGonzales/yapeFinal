"use strict";

const EnterCard = (update)=>{
	const entercard = $('<section class="codeuser row"></section>');
	const img = $('<img src="img/icons/bcp-logo.png" class="mtop10"/>');
    const info = $('<div class="col s12"><h1 class="bold">Ingresa la clave de tu tarjeta</h1><p class="info font3">Tarjeta '+state.card+'</p></div>');
    const register = $('<button id="registrarcard">REGISTRAR</button>');
    const inputCard = $('<input type="text" maxlength="16" class="mtop10"/>');

    card.append(img);
    card.append(info);
    card.append(inputCard);
    card.append(register);


    return entercard;
}