const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const createIngredientsEl = array.map((element) => {
//   const liEl = document.createElement("li");
//   liEl.textContent = element;
//   console.log(liEl);
// });
// const ulList = document.querySelector("#ingredients");
// ulList.appendChild(createIngredientsEl);
// console.log(ulList);
// let ingredientsItems = array.map((element) => {
//   const ingredienEl = document.createElement("li");
//   ingredientEl.textContent = element;
// });
// console.log(ingredienEl);
// const createIngredientsItemEl = (ingredients) => {
//   return ingredients.map((ingredient) => {
//     const itemEl = document.createElement("li");
//     itemEl.textContent = ingredient;
//     return itemEl;
//   });
// };
// // console.log(itemEl);
// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// let ingredientsItems = [];
// const addingIngridientsToList = function (array) {
//   array.forEach((element) => {
//     let liElements = document.createElement("li");
//     liElements.textContent = element;
//     ingredientsItems.push(liElements);
//   });
//   listOfIngredients.append(...ingredientsItems);
// // };

const listEl = document.querySelector("#ingredients");
//console.log(listEl);
const createListEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;

  return itemEl;
});
console.log(createListEl);

const resut = listEl.append(...createListEl);
console.log(resut);
