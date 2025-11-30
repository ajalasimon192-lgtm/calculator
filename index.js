const display = document.getElementById("calculator");

const specialChars = ['%', '*', '+', "-", '/'];

function appendToCalculator(input) {
  display.value += input;
  
}

function clearDisplay() {
  display.value = " ";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
}
