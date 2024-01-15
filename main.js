function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    if ( b !== 0 ) {
        return a / b;
    }
    else {
        return "Not possible to divide by 0 :(";
    }
 }

function multiply(a,b) {
    return a * b;
}

let number1 = '';
let operator = '';
let number2 = '';
let displayValue = '';

function operate(op,a,b) {
    switch (op) {
        case '+':
         return add(a,b);
        case '-':
         return subtract(a,b);
        case '/':
         return divide(a,b);
        case '*':
         return multiply(a,b);
        default:
         return "ERROR";

    }
}

function appendDigit(digit) {
    console.log("appendDigit called with digit:", digit);
    displayValue += digit;
    updateDisplay();
}

function setOperator(op){
    console.log("setOperator called with operator:", op);
    if (number1 === '') {
        number1 = displayValue;
        operator = op;
        displayValue += op;
    } 
    else {
        number2 = displayValue;
        calculate();
        operator = op;
        displayValue = number1 + op;
    }
    updateDisplay();

}
function calculate() {
    console.log("calculate called");
    if (number1 !== '' && operator !== '' && number2 !== '') {
        try {
        const result = operate(operator, parseFloat(number1), parseFloat(number2));
        number1 = result.toString();
        number2 = '';
        operator = '';
        displayValue = result.toString();
        updateDisplay();
    }
        catch(error) {
        displayValue = "ERRROR" + error.message;
        updateDisplay();
    }
}
}
    

    

   
function updateDisplay() {
    console.log("updateDisplay called with displayValue:", displayValue);
    document.getElementById('display').value = displayValue;

}

function clearDisplay() {
    console.log("clearDisplay called");
    number1 = '';
    number2 = '';
    operator = '';
    displayValue = '';
    updateDisplay();
}

