"use strict";

const EnterCard = (update)=>{

	const entercard = $('<section class="codeuser row"></section>');
	const img = $('<img src="img/icons/bcp-logo.png" class="mtop10"/>');
    const info = $('<div class="col s12 minput10"><h1 class="bold">Ingresa la clave de tu tarjeta</h1><p class="info font3">Tarjeta '+state.card+'</p></div>');
    const enter = $('<button id="registrarcard" class="orange mtop10" disabled>REGISTRAR</button>');
    const lockCard = $('<input id="lockCard" type="text" maxlength="16" class="minput10"/>');
    const detail =$('<div class="mtop10"></div>');

    entercard.append(img);
    entercard.append(info);
    
    detail.append(lockCard);
    detail.append(enter);


    lockCard.on('keyup',()=>{
        if (lockCard.val() == state.password) {
            enter.removeAttr("disabled");
        }else{
            enter.attr("disabled",true);
        }
    });

    enter.on('click', ()=>{
        state.register = 7;
        update();
    });

    entercard.append(detail);

    return entercard;
}