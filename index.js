const display = document.getElementById("calculator");

const specialChars = ["%", "*", "+", "-", "/", "="];

function appendToCalculator(input) {
  if (specialChars.includes(input) && display.value === "") {
    return;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = " ";
}

function calculate() {
  if (display.value.includes("%")) {
    display.value = eval(display.value.replace("%", "/100"));
  }
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
}

function del() {
  display.value = display.value.toString().slice(0, -1);
}
