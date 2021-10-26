const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEl = document.querySelector('.gallery');
const newImages = images
  .map((img) => `<li class = "list-item">
  <img src = "${img.url}" alt = "${img.alt}"width = "600" height = "300"</li>`)
listEl.insertAdjacentHTML("beforeEnd", newImages)
listEl.setAttribute(
    'style','list-style-type:none'
  );

// const listEl = document.querySelector('.gallery');
// images.map(img => {
//   listEl.insertAdjacentHTML(
//     'beforeend',
//     `<li><img src = "${img.url}" alt = "${img.alt}" 
//       width = "600" height = "300" ></li >`,
//   );
// });
// listEl.setAttribute(
//   'style','list-style-type:none;',
// );
// for(let el of  images) 
// document.querySelector('.gallery').insertAdjacentHTML('beforeEnd', `<li><img src="${el.url}" alt="${el.alt}" width ="600" height = "300"></li>`);



// const allImages = document.querySelector(".gallery");
//   allImages.style.display = "flex";
//   allImages.style.flexDirection = "column";
//   allImages.style.listStyle = "none";
//   allImages.setAttribute("flex-direction", "column");

// const imagesListTemplate = ({url, alt}) => {
//   return `<li><img src = ${url} alt = '${alt}' width="630" height="375"></li>`;
// };
// const addImg = images.map(imagesListTemplate).join('');
// console.log(addImg);

// allImages.insertAdjacentHTML("afterbegin", addImg);
// images.forEach(el => {
//   listEl.insertAdjacentHTML(
//     'afterbegin',
//     `<li><img src = "${el.url}" alt = "${el.alt}"  width = "150" height = "100" /></li>`,
//   );
// });


