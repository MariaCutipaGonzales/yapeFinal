"use strict";
const Codeuser = () =>{
    const codeuser = $('<div class="codeuser row"></div>');
	const img = $('<img src="img/icons/message.png"/>');
    const info = $('<div class="col s12"><h1>Ahora Ingresa tu código<h1><p class="info">Enviamos un SMS con el código de validacion al numero <strong>'+state.number+'<strong><p></div>');

    const div = $('<div class="col s12 mtop5"></div>');
	const input = $('<input id="codeuser" type="number" pattern="[0-5]{5}"><br>');
    
    div.append(input);
    
    codeuser.append(img);
    codeuser.append(info);
    codeuser.append(div);
    
    return codeuser;
}