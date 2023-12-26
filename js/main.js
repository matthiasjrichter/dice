//ROLL DICE

const validDice = [4, 6, 8, 10, 12, 20]; //valid inputs

let resultsArr = [];

function rollDice(dice, showResult) {
  if (validDice.includes(dice)) {
    result = 1 + Math.floor(Math.random() * dice);
  } else alert("Invalid Input");

  document.querySelector(showResult).innerText += result + "|";

  resultsArr.push(result); //to sum it later
  document.querySelector("#results").innerText = resultsArr.join("|") + "|";

  sumDice(); //automagically updates sum
}

//dice
const rollD4 = () => rollDice(4, "#d4Result");
const rollD6 = () => rollDice(6, "#d6Result");
const rollD8 = () => rollDice(8, "#d8Result");
const rollD10 = () => rollDice(10, "#d10Result");
const rollD12 = () => rollDice(12, "#d12Result");
const rollD20 = () => rollDice(20, "#d20Result");

//boni/mali
const add1 = () => add(1);
const add2 = () => add(2);
const add3 = () => add(3);
const add4 = () => add(4);
const add5 = () => add(5);

const sub1 = () => add(-1);
const sub2 = () => add(-2);
const sub3 = () => add(-3);
const sub4 = () => add(-4);
const sub5 = () => add(-5);

//ADD BONI/MALI
function add(bonus) {
  resultsArr.push(bonus);
  document.querySelector("#results").innerText = resultsArr.join("|") + "|";
  sumDice(); //automagically updates sum
}

//SUM
function sumDice() {
  let sum = resultsArr.reduce((a, c) => a + c, 0);
  document.querySelector("#sumResult").innerText = sum;
}

//EventListeners
document.querySelector("#d4Button").addEventListener("click", rollD4);
document.querySelector("#d6Button").addEventListener("click", rollD6);
document.querySelector("#d8Button").addEventListener("click", rollD8);
document.querySelector("#d10Button").addEventListener("click", rollD10);
document.querySelector("#d12Button").addEventListener("click", rollD12);
document.querySelector("#d20Button").addEventListener("click", rollD20);

document.querySelector("#add1").addEventListener("click", add1);
document.querySelector("#add2").addEventListener("click", add2);
document.querySelector("#add3").addEventListener("click", add3);
document.querySelector("#add4").addEventListener("click", add4);
document.querySelector("#add5").addEventListener("click", add5);

document.querySelector("#sub1").addEventListener("click", sub1);
document.querySelector("#sub2").addEventListener("click", sub2);
document.querySelector("#sub3").addEventListener("click", sub3);
document.querySelector("#sub4").addEventListener("click", sub4);
document.querySelector("#sub5").addEventListener("click", sub5);

// document.querySelector("#sumDice").addEventListener("click", sumDice); //was button to manually sum, not needed anymore
