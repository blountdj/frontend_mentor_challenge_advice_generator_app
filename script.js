// variables
const diceEl = document.querySelector(".dice");
const numberEl = document.querySelector(".number");
const adviceEl = document.querySelector(".quote");
let max = 224;

// Functions
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const makeRequest = async () => {
  const response = await fetch(
    `https://api.adviceslip.com/advice/${getRandomInt(max)}`
  );
  const myJson = await response.json();

  numberEl.textContent = `advice #${myJson.slip.id}`;
  adviceEl.textContent = myJson.slip.advice;
};

// Event listener
diceEl.addEventListener("click", makeRequest);
