"use strict";

const Card = (update)=>{
	const card = $('<section class="codeuser"></section>');
	const img = $('<img src="img/icons/bcp-logo.png" class="mtop10"/>');
    const info = $('<div class="row col s12 mbot5"><h1 class="bold">Registra tu  tarjeta débito BCP</h1><p class="info font3">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.</p></div>');

    const go = $('<button class="continuar orange mtop10" disabled>CONTINUAR</button>');
    const detail = $('<div class="mtop10"></div>');
    const inputCard = $('<input id="card" type="text" maxlength="16" class="mtop10 mbot5"/>');
    const scan = $('<a href="#" class="linkTerms"><img src="img/icons/scan.png">Escanear tarjeta</a>');
    const divFecha = $('<div class="row mtop5"><p class="font3 col s7">Fecha de vencimiento</p></div>');
    const month = $('<input class="fvencimiento col s2" type="text" maxlength="2"/>');
    const slash = $('<span class="col s1 font3">/</span>');
    const year = $('<input class="fvencimiento col s2" type="text" maxlength="2" />');

    divFecha.append(month);
    divFecha.append(slash);
    divFecha.append(year);

    detail.append(inputCard);
    detail.append(scan);
    detail.append(divFecha);
    card.append(img);
    card.append(info);
    card.append(detail);
    card.append(go);

    inputCard.on('keyup', (e)=>{
        validaInputs();  
        state.card = inputCard.val();
    });

    month.on('keyup', (e)=>{
        validaInputs();  
    });

    year.on('keyup', (e)=>{
        validaInputs();  
    });

    const validaInputs =()=>{
        if(inputCard.val() !="" && month.val() !="" && year.val() !="" && month.val() >=1 && month.val() <=12 && year.val() >=17 && year.val() <=24){go.removeAttr("disabled")}else{go.attr("disabled", true)};
    }

    go.on('click',(e)=>{
        e.preventDefault();
        $.post("api/registerCard",{phone:state.number,cardNumber:state.card,cardMonth:month.val(),cardYear:year.val(),cardPassword:state.password},function(response){
            if(response.success == true){
                state.register = 6;
                update();
            }
        },'json');
    });

    return card;
}