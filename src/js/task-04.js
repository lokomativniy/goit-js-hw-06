//  <div id="counter">
//       <button type="button" data-action="decrement">-1</button>
//       <span id="value">0</span>
//       <button type="button" data-action="increment">+1</button>
//     </div>

const { children } = document.querySelector('#counter');

const btnDecrement = children[0];
const span = children[1];
const btnIncrement = children[2];

let counterValue = 0;

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  span.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  span.textContent = counterValue;
});



