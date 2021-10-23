{/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}


const refs = {
   input :document.querySelector('#name-input'),
   output :document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputChange ) ;
function onInputChange(event) {
   console.log(event.currentTarget.value);
   refs.output.textContent = event.currentTarget.value
}



