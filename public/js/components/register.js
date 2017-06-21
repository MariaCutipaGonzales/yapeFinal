"use strict";

const Register = (update) =>{
	const register = $('<section class="useryape row"></section>');
	const img = $('<img src="img/icons/lockone.png" class="mtop5"/>');
    const info = $('<div class="col s12"><h1 class="info bold">Crea tu usuario Yape</h1><p class="info font3">Ingresa un nombre, email y  clave de usuario.</div>');
    const crearCuenta = $('<button class="orange mtop5" disabled>CREAR CUENTA</button>');
    const div = $('<div class="col s12 mtop5"></div>');
	const name = $('<input id="name" type="text" placeholder="Nombre" pattern="[A-Z][a-z]"" class="minput10" /><br>');
    const mail = $('<input id="mail" type="email" placeholder="correo@ejemplo.com" pattern="[0-5]{5}" class="minput10" /><br>');
    const password = $('<input id="password" type="password" pattern="[0-5]{5}" class="minput10" /><br>');
    const label = $('<p class="font3 minput10">Cuida esta clave como oro, es tu acceso a Yape</p>');
    
    div.append(name);
    div.append(mail);
    div.append(password);
    div.append(label);
    div.append(crearCuenta);
    register.append(img);
    register.append(info);
    register.append(div);

    crearCuenta.on('click',(e)=>{
        e.preventDefault();
        console.log(state.number);
        $.post("api/createUser",{phone:state.number,name:state.name,email:state.email,password:state.password},function(response){
            if(response.success == true){
                state.code = response.data.code;
                state.register = 4;
                update();
            }
        },'json');
    });
    return register;
}