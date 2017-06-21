'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.register == null){
      wrapper.append(Welcome(_ => render(root)));
      root.append(wrapper);
  }
  if(state.register == 1){
	wrapper.append(Validation(_ => render(root)));
    root.append(wrapper);
  }
  if(state.register == 2){
  	wrapper.append(Codeuser(_ => render(root)));
    root.append(wrapper);
  }
  if(state.register == 3){
  	wrapper.append(Register(_ => render(root)));
    root.append(wrapper);
  }
}

const state = {
  register: null,
  number: null,
  code:null,
  terms:null,
  card: null
};


$( _ => {
    const root = $("#root");
    render(root);
});
