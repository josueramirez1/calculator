const container = document.querySelector(".container");
const display = document.querySelector(".input");
const btn = [...document.querySelectorAll("button")];
let expression = "";
let secondValue = "";
let symbol;

document.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  // if user clicks on clear button...
  if (e.target.matches(".clear")) {
    display.value = "";
    return;
  }

  if (e.target.matches(".number")) {
    let number = e.target.innerText;
    expression = expression + number;
    display.value = expression;
  }

  if (e.target.matches(".operator")) {
    symbol = e.target.innerText;
    expression = expression + symbol;
  }
  if (expression.includes(symbol) && e.target.matches(".number")) {
    display.value = "";
    let number = e.target.innerText;
    secondValue = secondValue + number;
    display.value = secondValue;
  }

  let arr = expression.split(symbol);
  console.log(arr);
});

// Helper function
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(value1, value2, operation) {
  operation(value1, value2);
}
