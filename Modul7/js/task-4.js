// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
//elem.addEventListener();
const counter = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
//let counterValue = counter.textContent;
let counterValue = 0;
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
