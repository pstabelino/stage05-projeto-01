// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");
let randomNumber = Math.round(Math.random() * 10);
let count = 1;

// eventos
btnTry.addEventListener("click", function (event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (inputNumber.value == randomNumber) {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");

    screen2.querySelector("h2").innerText = `Acertou em ${count} tentativas!`;
  }
  inputNumber.value = "";
  count++;
});

btnAgain.addEventListener("click", function () {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  count = 1;
});

// // variáveis
// const screen1 = document.querySelector(".screen1");
// const screen2 = document.querySelector(".screen2");
// const btnTry = document.querySelector("#btnTry");
// const btnAgain = document.querySelector("#btnAgain");
// let randomNumber = Math.round(Math.random() * 10);
// let count = 1;

// // eventos
// btnTry.addEventListener("click", handleTryClick);
// btnAgain.addEventListener("click", handleResetClick);
// document.addEventListener("keydown", function (e) {
//   if (e.key == "Enter" && screen1.classList.contains("hide")) {
//     handleResetClick();
//   }
// });

// // funções callback
// function handleTryClick(event) {
//   event.preventDefault();

//   const inputNumber = document.querySelector("#inputNumber");

//   if (inputNumber.value == randomNumber) {
//     toggleScreen();
//     screen2.querySelector("h2").innerText = `Acertou em ${count} tentativas!`;
//   }

//   inputNumber.value = "";
//   count++;
// }

// function handleResetClick() {
//   toggleScreen();
//   count = 1;
//   randomNumber = Math.round(Math.random() * 10);
// }

// function toggleScreen() {
//   screen1.classList.toggle("hide");
//   screen2.classList.toggle("hide");
// }
