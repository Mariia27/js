// // const countAllCategories = (ul#categories) =>
// //   array.reduce((totalCategories, index) => totalCategories + index, 0);

// // console.log(countAllCategories(ul#categories));
// // // 20916

// const categorieName = document
//   .querySelectorAll("li.item")
//   .forEach((categori) => {
//     document.querySelector("h2");
//   });
const allCategoriesEl = document.querySelectorAll("li.item");
console.log(`В списке ${allCategoriesEl.length} категории.`);

allCategoriesEl.forEach((categoriesEl) => {
  const categorieName = categoriesEl.querySelector(`h2`);
  const allTittles = categoriesEl.querySelectorAll("li.item ul li");
  //   categorieName.textContent = ingredient;
  console.log(`Категория: ${categorieName.textContent}`);
  console.log(`Количество элементов: ${allTittles.length}`);
});
// const allTittles = document.querySelectorAll("li.item ul li");
// console.log(`Количество элементов: ${allTittles.length}`);
// categoriesEl.forEach((categoryEl) => {
//     const nameCategory = categoryEl.querySelector(`h2`);
// })
// ;
//     console.log(`Категория: ${nameCategory}`);

// console.log(`Категория: ${allCategories}`);
// const categorieName = document.querySelectorAll("li.item");

// const tittles = document.querySelector("h2");
// console.log(`Категория: ${tittles}`);

// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// Функциональный forEach
//numbers.forEach((num) => console.log(num));

// Указываем параметр idx если нужен доступ к счетчику
// const categorieName = document
//   .querySelectorAll("li.item")
//   .forEach((categori) => {
//     document.querySelector("h2");
//   });
// console.log(`Категория: ${allCategories}`);

// const allCategories = document.querySelectorAll("h2");
// console.log(allCategories);
