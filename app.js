/*-------------------------------- Constants --------------------------------*/
const numbers = Array.from(document.getElementsByClassName("button"));
const operators = ["+", "-", "*", "/"];
/*-------------------------------- Variables --------------------------------*/
let display = document.querySelector(".display");
let num1 = "";
let num2 = "";
let operator = "";
let resultDisplayed = false;
/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

function run() {
  numbers.forEach(number => {
    number.addEventListener("click", (event) => {
      const buttonValue = event.target.innerText;
      // Check if '=' button is clicked to evaluate the expression
      if (buttonValue === "=") {
        evaluateExpression();
      } else if (operators.includes(buttonValue)) {
        // If an operator button is clicked
        if (num1 && num2) {
          // If both numbers and an operator are already present, evaluate the expression first
          evaluateExpression();
        }
        operator = buttonValue;
        resultDisplayed = false;
      } else {
        // If a number button is clicked
        if (resultDisplayed) {
          // If result is displayed, clear the display and start a new expression
          display.textContent = "";
          num1 = "";
          num2 = "";
          operator = "";
          resultDisplayed = false;
        }
        if (!operator) {
          num1 += buttonValue;
        } else {
          num2 += buttonValue;
        }
        display.textContent += buttonValue;
      }
    });
  });
}

function evaluateExpression() {
  if (num1 && num2 && operator) {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = "Error";
    }
    // Display the result
    display.textContent = result;
    // Update variables for next expression
    num1 = result.toString();
    num2 = "";
    operator = "";
    resultDisplayed = true;
  }
}


function clearDisplay() {
    display.textContent = ""; // Clear the display
    num1 = "";
    num2 = "";
    operator = "";
    resultDisplayed = false;
  }
run()
/*-------------------------------- Functions --------------------------------*/

