// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение
//в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
//41  18 time

const input = document.querySelector("#name-input");
input.addEventListener("input", onInputEl);
const span = document.querySelector("#name-output");
function onInputEl(event) {
  if (event.currentTarget.value !== ``) {
    span.textContent = event.currentTarget.value;
  } else {
    span.textContent = `незнакомец`;
  }
  console.log(event.currentTarget.value);
}
