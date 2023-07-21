let displayValue = {
  firstNumber: '',
  secondNumber: '',
  operator: '',
  answer: '',
}

let display = document.querySelector('.display');

const button = document.querySelector('.button');
const buttons = document.querySelectorAll('.button');

/**buttons.forEach((e) => {
  e.addEventListener('click', getInput)
});**/

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(firstNumber, secondNumber, operator) {
  let x = parseFloat(firstNumber);
  let y = parseFloat(secondNumber);

  if (operator === ' + ') {
    getAnswer(add(x, y));
  }
  else if (operator === ' - ') {
    getAnswer(subtract(x, y));
  }
  else if (operator === ' x ') {
    getAnswer(multiply(x, y));
  }
  else if (operator === ' / ') {
    getAnswer(divide(x, y));
  }
}

function reset() {
  if (displayValue.answer === '') {
    display.innerHTML = '0';
    displayValue.firstNumber = '';
    displayValue.secondNumber = '';
    displayValue.operator = '';
    displayValue.answer = '';
  }
  else {
    displayValue.firstNumber = '';
    displayValue.secondNumber = '';
    displayValue.operator = '';
    displayValue.answer = '';
  }
}

function updateDisplay(input) {
  if (!isNaN(input) && displayValue.operator === '' ||
    input === '.' && displayValue.operator === '') {
    display.innerHTML = displayValue.firstNumber + input;
    displayValue.firstNumber = displayValue.firstNumber + input;
  }
  else if (!isNaN(input) && displayValue.operator !== '' ||
    input === '.' && displayValue.operator !== '') {
    displayValue.secondNumber = displayValue.secondNumber + input;
    display.innerHTML = displayValue.firstNumber + displayValue.operator + displayValue.secondNumber;
  }
  else if (displayValue.firstNumber === '' && input === ' - ') {
    displayValue.firstNumber = '-';
  }
  else if (displayValue.firstNumber !== '' && displayValue.operator !== '' &&
    displayValue.secondNumber === '' && input === ' - ') {
    displayValue.secondNumber = '-';
  }
  else if (displayValue.firstNumber !== '' && (input === ' + ' || input === ' - ' || input === ' x ' || input === ' / ')) {
    if (displayValue.secondNumber !== '') {
      operate(displayValue.firstNumber, displayValue.secondNumber, displayValue.operator);
      display.innerHTML = displayValue.firstNumber + displayValue.operator;
    }
    displayValue.operator = input;
    display.innerHTML = displayValue.firstNumber + displayValue.operator;
  }
  else if (input === '=') {
    operate(displayValue.firstNumber, displayValue.secondNumber, displayValue.operator);
  }
}

function getAnswer(answer) {
  display.innerHTML = answer;
  displayValue.answer = answer;
  reset();
  displayValue.firstNumber = answer;
}

/**
  function getInput() {
  buttons.forEach((e) => {
    let input = e.innerText;
    console.log(input);
  });
}
**/


