const defaultResult = 0;
let currentResult = defaultResult;

//Gets input from input field
function getNumberInput() {
    return parseInt(userInput.value);
}

//Generate and write calculations logs

function createAndWriteOutput(operator, resBeforeCalculation, calcNumber) {
    const descriptonCalc = `${resBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, descriptonCalc); //from vendor file!
}

function add() {
    const enteredNumber = getNumberInput(); 
    let initialResult = currentResult;
    currentResult = currentResult + enteredNumber; 
    createAndWriteOutput("+", initialResult, currentResult);
}

function subtract() {
    const enteredNumber = getNumberInput(); 
    let initialResult = currentResult;
    currentResult = currentResult - enteredNumber; 
    createAndWriteOutput("-", initialResult, currentResult);
}

function multiply() {
    const enteredNumber = getNumberInput(); 
    let initialResult = currentResult;
    currentResult = currentResult * enteredNumber; 
    createAndWriteOutput("*", initialResult, currentResult);
}

function divide() {
    const enteredNumber = getNumberInput(); 
    let initialResult = currentResult;
    currentResult = currentResult / enteredNumber; 
    createAndWriteOutput("/", initialResult, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
