"use strict";

const Hello = (update)=>{
	const hello = $('<section class="hello"></section>');
	const header = $('<div class="header"></div>');
	const info = $('<img src="img/icons/happy-face.png" class="mtop10 "/><h1 class="bg-white">Hola</h1>');
   	const configure = $('<div><img src="img/icons/engine.png" class="engine"/></div>');
    const viewSaldo = $('<a href="#" class="linkTerms"><img src="img/icons/eye.png"/>Mostrar Saldo</a>');
    
    const body = $('<div class="movimientos"></div>');
    const movimiento = $('<div class="border-div"><span class="font3 bg-white ult-mov">ÚLTIMOS MOVIMIENTOS</span><a><img class="circular" src="img/icons/right-arrow-circular-button.png"></a></div>');
    const pago = $('<div class="pago"></div>');

    const img = $('<img src="img/icons/icon.png" class="detail"/>');
    const detail = $('<div class="detail"><p class="font3 bg-white mtop10">¿Aún no  realizas tu primer <br>pago?</p><p class="font3 bg-white">Es rápido y sencillo</p></div>');
    
    const pagos=$('<div class="env-rec"></div>');

    const enviar = $('<div class="linkhello" id="send"><a href="#"><img src="img/icons/send.png"></a><p class="bg-white font3">ENVIAR PAGO</p></div>');
	const recibir = $('<div class="linkhello"><a href="#"><img src="img/icons/code-qr.png"></a><p class="bg-white font3">RECIBIR PAGO</p></div>');

	header.append(configure);
	header.append(info);
    pago.append(img);
    pago.append(detail);

    pagos.append(enviar);
    pagos.append(recibir);

    body.append(movimiento);
    body.append(pago);
    body.append(pagos);

    header.append(viewSaldo);
    hello.append(header);
    hello.append(body);

    return hello;
}