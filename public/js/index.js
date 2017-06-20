'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Welcome());
  
  //BUTTON REGISTER
  if(state.register != null){
  	root.empty();
	wrapper.append(Validation());
  }

  //NUMBER VALIDATION
  if(state.number != null){
  	root.empty();
  	console.log("validamos tu numero ahora toca registrarte");
  	wrapper.append(Register());
  }

  root.append(wrapper);

}

const state = {
  register: null,
  number: null,
  code:null
};


$( _ => {
/*  getPokemon((err, data) => {
    if (err) console.log(err);*/
    const root = $("#root");
    render(root);
/*  });
*/
});
