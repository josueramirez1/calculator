// Selectors
const container = document.querySelector(".container");
const display = document.querySelector(".input");
const numBtn = [...document.querySelectorAll(".number")];
const operatorBtn = [...document.querySelectorAll(".operator")];
// Global variables
let a;
let b;

container.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  // if user clicks on clear button input field clears and classes reset
  if (e.target.matches(".clear")) {
    display.value = "";
    numBtn.forEach((num) => {
      num.classList.remove("number2");
      num.classList.add("number");
    });
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
    a = display.value;
  }
  if (e.target.matches(".number2")) {
    // if operator was clicked before, display will be reset and attribute will be removed.
    clearDisplayAfterOp();
    // Select number
    let number = e.target.innerText;
    // expression variable is given the number
    display.value = display.value + number;
    // expression is displayed in input field
    b = display.value;
  }

  if (e.target.matches(".operator")) {
    // An attribute is set to the html to reference if user decides to click on number again
    e.target.setAttribute("data-click", true);
    numBtn.forEach((num) => {
      num.classList.toggle("number");
      num.classList.toggle("number2");
    });
    // Run operate function if two conditions have been satisfied
    // if (a !== "" && b !== "") operate(a, b);
  }
  console.log(a);
  console.log(b);
});

// Helper function
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
  parseInt(value1);
  parseInt(value2);
  operation(value1, value2);
}
