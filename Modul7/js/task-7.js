// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range" />
// <br />
// <span id="text">Абракадабра!</span>

const input = document.querySelector("#font-size-control");
const san = document.querySelector("#text");
input.addEventListener("input", (event) => {
  san.style.fontSize = `${event.currentTarget.value}px`;
});
//   if (
//     Number(input.getAttribute(`data-length`)) === input.value.length
//     //event.currentTarget.length <= 6
//   ) {
//     input.classList.add("valid");
//     //input.classList.remove("invalid");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
// });
