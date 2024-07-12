const container = document.querySelector(".container");
const display = document.querySelector(".input");
const btn = [...document.querySelectorAll("button")];
let arr = [];
let tempArr = [];
let expression = "";
let secondValue = "";
let symbol;

document.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  // if user clicks on clear button input field clears and expression clears
  if (e.target.matches(".clear")) {
    display.value = "";
    expression = "";
    return;
  }
  // if user clicks on button it is displayed and numbers are added together as string
  if (
    (expression.includes(symbol) && e.target.matches(".number")) ||
    e.target.matches(".number")
  ) {
    let number = e.target.innerText;
    tempArr.push(number);
    expression = expression + number;
    display.value = expression;
    console.log(tempArr);
  }
  // if user clicks on operator button an operator symbol is added to the expression string
  if (e.target.matches(".operator")) {
    let exp = tempArr.join("");
    symbol = e.target.innerText;
    tempArr = [];
    arr.push(exp);
    arr.push(symbol);
    console.log(arr);
    expression = expression + symbol;
  }
  // if the expression has an operator and the number button is then clicked again, the input field will reset and a second value will be used to display
  //   if (expression.includes(symbol) && e.target.matches(".number")) {
  //     display.value = "";
  //     let number = e.target.innerText;
  //     expression = expression + number;
  //     display.value = expression;
  //   }

  //   let arr = expression.split(symbol);
  //   console.log(symbol.name);
  //   if (e.target.matches(".equals")) {
  //     operate(arr[0], arr[1], symbol);
  //   }
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
  parseInt(value1);
  parseInt(value2);
  operation(value1, value2);
}
