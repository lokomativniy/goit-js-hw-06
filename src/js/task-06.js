// #validation-input {
//    border: 2px solid #bdbdbd;
//  }

//  #validation-input.valid {
//    border-color: #4caf50;
//  }

//  #validation-input.invalid {
//    border-color: #f44336;
//  }

{
  /* <input
type="text"
id="validation-input"
data-length="6"
placeholder="Please enter 6 symbols"
/> */
}

const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
const inputLength = document.querySelector('input[data-length="6"]');
console.log(inputLength.dataset.length);
function onInputBlur() {
  console.log(input.value.length);
  input.classList.add('invalid');
  if (input.value.length === +inputLength.dataset.length)
    input.classList.replace('invalid', 'valid');
}
