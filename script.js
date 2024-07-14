// Selectors
const container = document.querySelector(".container");
const display = document.querySelector(".input");
const numBtn = [...document.querySelectorAll(".number")];
const operatorBtn = [...document.querySelectorAll(".operator")];
// Global variables
let arr = [];

// let b;

container.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  // if user clicks on clear button input field clears and classes reset
  if (e.target.matches(".clear")) {
    display.value = "";
    arr = [];
    // numBtn.forEach((num) => {
    //   num.classList.remove("number2");
    //   num.classList.add("number");
    // });
    return;
  }
  if (e.target.matches(".number")) {
    // if operator was clicked before, display will be reset and attribute will be removed.
    clearDisplayAfterOp();

    // display.value = "";
    // Select number
    let number = e.target.innerText;
    // expression variable is given the number
    display.value = display.value + number;
    // expression is displayed in input field
  }
  // if (e.target.matches(".number2")) {
  //   // if operator was clicked before, display will be reset and attribute will be removed.
  //   clearDisplayAfterOp();
  //   // Select number
  //   let number = e.target.innerText;
  //   // expression variable is given the number
  //   display.value = display.value + number;
  //   // expression is displayed in input field
  //   b = display.value;
  // }

  if (e.target.matches(".operator")) {
    let equals = document.querySelector(".equals");
    if (equals.matches("[data-click]")) {
      equals.removeAttribute("data-click");
    }
    // An attribute is set to the html to reference if user decides to click on number again
    e.target.setAttribute("data-click", true);
    arr.push(parseInt(display.value));
    arr.push(e.target.innerText);

    // Run operate function if two conditions have been satisfied
    if (arr.length > 3) {
      beginToCalculate();
      arr.splice(0, 3);
      console.log(arr);
      arr.unshift(parseInt(display.value));
      console.log(arr);
    }
  }

  if (e.target.matches(".equals")) {
    e.target.setAttribute("data-click", true);
    beginToCalculate();
    arr = [];
  }
  console.log(arr);
});

// Helper function
function beginToCalculate() {
  let value1 = arr[0];
  let operator = arr[1];
  let value2 = parseInt(display.value);
  if (arr[1] === "*") operator = multiply;
  if (arr[1] === "/") operator = divide;
  if (arr[1] === "+") operator = add;
  if (arr[1] === "-") operator = subtract;

  let result = operate(value1, value2, operator);
  display.value = result;
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
  return operation(value1, value2);
}
