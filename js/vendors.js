//Adding elements to variables for easier calculations

const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('button-add');
const subtractBtn = document.getElementById('button-substract');
const multiplyBtn = document.getElementById('button-multiply');
const divideBtn = document.getElementById('button-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
  }