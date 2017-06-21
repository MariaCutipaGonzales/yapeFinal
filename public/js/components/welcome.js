"use strict";
const Welcome = (update) =>{
	const welcome = $('<section class="welcome"></section>');
	const carousel = $('<div class="slideCarousel owl-carousel owl-theme"></div>');
	const register = $('<button class="register orange mtop5">Registrarse</button>');

	const div1 =$('<div class="item mtop5"></div>');
	const div2 =$('<div class="item mtop5"></div>');
	const div3 =$('<div class="item mtop5"></div>');
	//carousel
	const img1 = $('<img src="img/icons/icon-people.png" class="responsive-img" />');
	const img2 = $('<img src="img/icons/happy-person.png" class="responsive-img" />');
	const img3 = $('<img src="img/icons/group-people.png" class="responsive-img" />');
	
	const info1 = $('<div class="info mtop5 mbot5"><h1 class="bold">Paga a tus amigos</h1> <p class="font3">paga a quien quieras desde donde<br> quieras, sin usar efectivo</p></div>');
	const info2 = $('<div class="info mtop5 mbot5"><h1 class="bold">Sin número de cuenta</h1> <p class="font3">Elige a quién pagar desde tu lista<br> de contactos</p></div>');
	const info3 = $('<div class="info mtop5 mbot5"><h1 class="bold">Gratis y Seguro</h1> <p class="font3">La transferencia es inmediata y<br>gratuita desde una cuenta a otra.</p></div>');

    register.on('click',(e)=>{
		e.preventDefault();
		state.register = 1;
		update();
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