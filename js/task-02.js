const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

const makeIngredients = elements => {
  return elements.map(element => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('ingredients__item');
    itemEl.textContent = element;
    return itemEl;
  });
};
const items = makeIngredients(ingredients);
listEl.append(...items);

