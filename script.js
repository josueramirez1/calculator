const container = document.querySelector(".container");
const display = document.querySelector(".input");
const btn = [...document.querySelectorAll("button")];
let numberValue = [];
console.log(btn);

document.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;
  // if user clicks on clear button...
  if (e.target.matches(".clear")) {
    numberValue = [];
    display.value = "";
    return;
  }
  // To save in an array
  let btnValue = e.target.innerText;
  numberValue.push(btnValue);
  console.log(numberValue);
  // To display on the input field
  let displayedNumbers = numberValue.join("");
  display.value = displayedNumbers;
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
