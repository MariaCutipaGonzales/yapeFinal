"use strict";

const Validation = () =>{

	const validation = $('<div class="validation row"></div>');
	const img = $('<img src="img/icons/phone.png"/>');
    const info = $('<div class="col s12"><h1>Para comenzar validemos tu número<h1><p class="info">Recibirás un SMS con un código de validación<p></div>');

    const div = $('<div class="col s12 mtop5"></div>');
	const input = $('<input id="validation" type="number" pattern="[0-9]{9}"><br>');
    const checkbox = $('<input id="terms" type="checkbox">');
    const terms= $('<p>Acepto los <a class="linkTerms">Términos y condiciones</a></p>');
	const continuar = $('<button class="continuar mtop5 orange" disabled>Continuar</button>');
    
    validation.append(img);
    validation.append(info);
    div.append(input);
    div.append(checkbox);
    div.append(terms);
    div.append(continuar);
    validation.append(div);
    
    checkbox.on('click', (e)=>{
        if($(this).is(":checked")){
            console.log("ya esta chekeado");
        }
    });
    
    continuar.on('click',(e)=>{
		e.preventDefault();
		state.number = input.val();
		console.log("el state es :" + state.number +"y el valor del input es :" input.val);
        $.post("api/registerNumber/",{number:input.val(),terms:true},(data,status)=>{
            console.log("succes"+data+"data"+status);
        });
	});
        
    function check_input(){
        if($(this).val().length == 0){
            $('button').attr('disabled',true);
        }else{
            $('button').removeAttr('disabled');
        }
    }
    
    return validation;
}