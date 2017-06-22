'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  
  if(state.register == null){
       wrapper.append(Hello(_ => render(root)));
    }
  if (state.register == 1){
	     wrapper.append(Validation(_ => render(root)));
    }
  if (state.register == 2){
  	   wrapper.append(Codeuser(_ => render(root)));
    }
  if (state.register == 3){
  	   wrapper.append(Register(_ => render(root)));
    }
  if(state.register == 4){
      wrapper.append(Yape(_ => render(root)));
  }
  if(state.register == 5){
      wrapper.append(Card(_ => render(root)));
  }
  if (state.register == 6) {
     wrapper.append(EnterCard(_ => render(root)));
  }
  if (state.register == 7){
    wrapper.append(Hello(_ => render(root))); 
  }
   root.append(wrapper);
}

const state = {
  register: null,
  number: null,
  code:null,
  terms:null,
  password:null,
  card: null
};


$( _ => {
    const root = $("#root");
    render(root);
});
