{
  /* <div class="widget">
      <p>Background color: <span class="color">-</span></p>
      <button type="button" class="change-color">Change color</button>
    </div> */
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

const getRandomHexColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
};
btn.addEventListener('click', getRandomHexColor);

