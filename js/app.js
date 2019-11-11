const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getNumberInput() {
    return parseInt(userInput.value);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

//Generate and write calculations logs
function createAndWriteOutput(operator, resBeforeCalculation, calcNumber) {
    const descriptonCalc = `${resBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, descriptonCalc); //from vendor file!
}

function add() {
    const enteredNumber = getNumberInput(); 
    let initialResult = currentResult;
    currentResult += enteredNumber; 
    createAndWriteOutput("+", initialResult, currentResult);
    writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getNumberInput(); 
    let initialResult = currentResult;
    currentResult -= enteredNumber; 
    createAndWriteOutput("-", initialResult, currentResult);
    writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getNumberInput(); 
    let initialResult = currentResult;
    currentResult *= enteredNumber; 
    createAndWriteOutput("*", initialResult, currentResult);
    writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getNumberInput(); 
    let initialResult = currentResult;
    currentResult /= enteredNumber; 
    createAndWriteOutput("/", initialResult, currentResult);
    writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
