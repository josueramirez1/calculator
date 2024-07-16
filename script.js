// Selectors
const container = document.querySelector(".container");
const display = document.querySelector(".input");
const operatorBtn = [...document.querySelectorAll(".operator")];
const period = document.querySelector(".period");
const characterNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Global variables
let arr = [];

//Calculator function
function calculator(e) {
  if (!e.target.matches("button")) return;
  // if user clicks on clear button input field clears and classes reset
  if (e.target.matches(".clear")) {
    display.value = 0;
    arr = [];
    return;
  }
  if (e.target.matches(".number")) {
    let key = e.key;
    console.log(e);
    // if operator was clicked before, display will be reset and attribute will be removed.
    clearDisplayAfterOp();
    operatorBtn.forEach((btn) => (btn.disabled = false));
    period.disabled = false;

    // Select number
    let number = e.target.innerText;
    // expression variable is given the number
    if (display.value === "0") {
      display.value = number;
    } else display.value = display.value + number;
    // expression is displayed in input field
  }

  if (e.target.matches(".period")) {
    let period = e.target.innerText;
    display.value = display.value + period;
    period.disabled = true;
  }

  if (e.target.matches(".operator")) {
    let equals = document.querySelector(".equals");
    if (equals.matches("[data-click]")) {
      equals.removeAttribute("data-click");
    }
    // An attribute is set to the html to reference if user decides to click on number again
    e.target.setAttribute("data-click", true);
    arr.push(parseFloat(display.value));
    arr.push(e.target.innerText);

    // Run operate function if two conditions have been satisfied
    if (arr.length > 3) {
      beginToCalculate();
      arr.splice(0, 3);
      arr.unshift(parseFloat(display.value));
    }
  }

  if (e.target.matches(".equals")) {
    e.target.setAttribute("data-click", true);
    beginToCalculate();
    arr = [];
  }
}

// Helper function
function beginToCalculate() {
  let [value1, operator] = arr;

  let value2 = parseFloat(display.value);
  if (arr[1] === "*") operator = multiply;
  if (arr[1] === "/") operator = divide;
  if (arr[1] === "+") operator = add;
  if (arr[1] === "-") operator = subtract;

  let result = operate(value1, value2, operator);
  // if user tries to divide by zero, display error message and then reset it back to zero
  if (result === "Nice try") {
    display.value = result;
    setTimeout(() => {
      display.value = 0;
    }, 1200);
  } else display.value = Math.round(result * 10) / 10;
}

function clearDisplayAfterOp() {
  let clicked = document.querySelector("[data-click]");
  if (clicked) {
    display.value = "";
    clicked.removeAttribute("data-click");
  }
}

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
  if (value2 === 0) {
    arr = [];
    return "Nice try";
  } else return operation(value1, value2);
}

// Event Listeners
container.addEventListener("click", calculator);
