{
  /* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
}

const refs = {
   input :document.querySelector('#name-input'),
   output :document.querySelector('#name-output'),
};

function onInputChange(event) {

       if (event.currentTarget.value === '') {
         refs.output.textContent = 'Anonymous';
    }
    else {
      refs.output.textContent = event.currentTarget.value
    }
}
refs.input.addEventListener('input',onInputChange)

// const refs = {
//   input: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };

// function onInputChange(event) {
//   refs.output.textContent = event.currentTarget.value;
// }
// refs.input.addEventListener('input', onInputChange);
