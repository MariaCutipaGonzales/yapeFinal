"use strict";
const Welcome = () =>{
	const welcome = $('<section class="welcome"></section>');
	const carousel = $('<div class="carousel fadeOut owl-carousel owl-theme"></div>');
	const register = $('<button class="register orange">Registrarse</button>');

	const div1 =$('<div class="item"></div>');
	const div2 =$('<div class="item"></div>');
	const div3 =$('<div class="item"></div>');
	//carousel
	const img1 = $('<img src="img/icons/icon-people.png" />');
	const img2 = $('<img src="img/icons/happy-person.png" />');
	const img3 = $('<img src="img/icons/group-people.png" />');
	
	const info1 = $('<h1>Paga a tus amigos</h1> <p>paga a quien quieras desde donde quieras, sin usar efectivo</p>');
	const info2 = $('<h1>Sin número de cuenta</h1> <p>Elige a quién pagar desde tu lista de contactos</p>');
	const info3 = $('<h1>Gratis y Seguro</h1> <p>La transferencia es inmediata y gratuita desde una cuenta a otra.</p>');

	/*const info1 = $('<p>paga a quien quieras desde donde quieras, sin usar efectivo</p>');
	const info2 = $('<p>Elige a quién pagar desde tu lista de contactos</p>');
	const info3 = $('<p>La transferencia es inmediata y gratuita desde una cuenta a otra.</p>');
	*/

	register.on('click',(e)=>{
		e.preventDefault();
		state.register = true;
		console.log("Tu registro esta habilitado ese es tu estado" +state.register);
	});

	div1.append(img1);
	div1.append(info1);

	div2.append(img2);
	div2.append(info2);

	div3.append(img3);
	div3.append(info3);

	carousel.append(div1);
	carousel.append(div2);
	carousel.append(div3);

	welcome.append(carousel);
	welcome.append(register);


	return welcome;
}