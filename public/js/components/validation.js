"use strict";

const Validation = (update) =>{

	const validation = $('<section class="row"></section>');
    const info = $('<div class="col s12 mtop5"><img src="img/icons/phone.png" class="mtop5"/><h1 class="bold">Para comenzar validemos tu número</h1><p class="info font3">Recibirás un SMS con un código de validación<p></div>');
    const div = $('<div class="validation row col s12 mtop5"></div>');
	const input = $('<input id="validation" class="mbot5" type="text" pattern="[0-9]" maxlength="9"><br>');
    const checkbox = $('<input id="terminos" type="checkbox" />');
    const terms= $('<p>Acepto los<a class="linkTerms">Términos y condiciones</a></p>');   
	const continuar = $('<button class="continuar mtop5 orange" disabled="disabled">CONTINUAR</button>');

    validation.append(info);
    terms.append(checkbox);
    div.append(input);
    div.append(terms);
    div.append(continuar);
    validation.append(div);
        
    input.on('keyup', () => {
       if(input.val().length == 9) {state.number= input.val(); validate();} else {continuar.attr("disabled", true);};
    });
    
    checkbox.on('click',()=>{
        if(checkbox.is(':checked') == true){ 
            state.terms = true;
            validate();
        }else{
             continuar.attr("disabled", true);
        };
    });
    
    function validate(){
         if(state.number != null && state.terms !=null )continuar.removeAttr("disabled");
    }
       
    continuar.on('click',(e)=>{
		e.preventDefault();
        console.log(state.number);
        $.post("api/registerNumber",{phone:state.number,terms:state.terms},function(response){
            if(response.success == true){
                state.code = response.data.code;
                state.register = 2;
                update();
            }
        },'json');
	});
        
    return validation;
}