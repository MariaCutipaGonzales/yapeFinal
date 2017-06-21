"use strict";
const Codeuser = (update) =>{
    const codeuser = $('<section class="codeuser row"></section>');
	const img = $('<img src="img/icons/message.png" class="mtop10"/>');
    const info = $('<div class="col s12"><h1 class="bold">Ahora Ingresa tu código</h1><p class="info font3">Enviamos un SMS con el código de validacion al numero <strong>'+state.number+'</strong></p></div>');

    const timer =$('<div class="timer"><p class="font3">Reintentar en</p><img src="img/icons/clock.png"/></div>');
    const time = $('<span class="time"></span>');
    const div = $('<div class="col s12 mtop5"></div>');
	const input = $('<input id="codeuser" type="text" maxlength="6" placeholder="- - - - -"/><br>');
        
    input.on('keyup', (e)=>{
        if(input.val() == state.code){
            state.register = 3;
            update();
        }    
    });
    
    div.append(input);
    timer.append(time);
    codeuser.append(img);
    codeuser.append(info);
    codeuser.append(div);
    codeuser.append(timer);
    second();
    function second(){
        var sec = 21;
        setInterval(()=>{
            sec--;
            if(sec >= 0){
                time.html(sec);
            }
            if(sec == 0){
                $.post("api/resendCode",{phone:state.number,terms:true},function(response){
                   if(response.success == true){
                       state.code = response.data;
                       second();
                       clearInterval(sec);
                   }                   
                },'json');
            }
        },1000);
    }    
    return codeuser;
}