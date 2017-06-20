"use strict";

const Register = () =>{
	const register = $('<div class="useryape row"></div>');
	const img = $('<img src="img/icons/lockone.png"/>');
    const info = $('<div class="col s12"><h1>Crea tu usuario Yape<h1><p class="info">Ingresa un nombre, email y  clave de usuario.</div>');

    const div = $('<div class="col s12 mtop5"></div>');
	const name = $('<input id="name" type="text" placeholder="Nombre" pattern="[A-Z][a-z]"><br>');
    const mail = $('<input id="mail" type="email" placeholder="correo@ejemplo.com" pattern="[0-5]{5}"><br>');
    const password = $('<input id="password" type="password" pattern="[0-5]{5}"><br>');
    
    
}