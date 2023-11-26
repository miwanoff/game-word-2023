"use strict";
window.onload = function () {
  const answ = document.getElementById("answ");
  const usedLetters = document.getElementById("used");
  const countInput = document.getElementById("count");
  const remainEl = document.getElementById("remain");
  const guessButton = document.getElementById("guess");
  let guess = "";
  let remain = word.length - 2;
  countInput.innerHTML = 0;
  let word = "прокрастинація";
  usedLetters.innerHTML = "";
  let answer = []; // що відкрито
  answer[0] = word[0]; // перша літера буде відкрита
  answer[word.length - 1] = word[word.length - 1]; // остання літера буде відкрита
  for (let i = 1; i < word.length - 1; i++) {
    answer[i] = "_"; // між першою та останньою літерою - знаки підкреслення
  }
  console.log(answer);
  answ.innerHTML = answer.join(" ");
  remainEl.innerHTML = remain;

  guess = prompt("guess the letter");
  usedLetters.innerHTML += guess;
  for (let i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      answer[i] = word[i];
      remain--;
    }
  }
  answ.innerHTML = answer.join(" ");
  remainEl.innerHTML = remain;
};
