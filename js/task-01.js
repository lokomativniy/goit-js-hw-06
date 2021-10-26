const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`);
const categoriesArr = [...allCategories]

  .map(
    categoriy => `Category: ${categoriy.children[0].textContent}
   Elements: ${categoriy.children[1].children.length}`,
  )
  .join('\n');
console.log(categoriesArr);

