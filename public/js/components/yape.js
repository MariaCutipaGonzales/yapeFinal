const Yape = (update) =>{
	const yape = $('<section class="yape"></section>');
	const contenido= $('<div class="contenido"><img src="img/icons/check.png"/><p><h1>¡Bien!</h1><p><p class="font3">Ahora puedes usar yape</p></div>');

	yape.append(contenido);

	setTimeout(()=>{
		state.register=5;
		update();
		},3000);
	
	return yape;
}
