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
    displayValue += digit;
    updateDisplay();
}

function setOperator(op){
    if(number1 === '') {
        number1 = displayValue;
        operator = op;
        displayValue = '';
     }
     else {
        number2 = displayValue;
        calculate();
        operator = op;
        displayValue = '';
     }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;

}

function clearDisplay() {
    number1 = '';
    number2 = '';
    operator = '';
    displayValue = '';
    updateDisplay();
}

function calculate() {
    if (number1 !== '' && operator !== '' && number2 !== '') {
        const result = operate(operator, parseFloat(number1), parseFloat(number2));
        number1 = result.toString();
        number2 = '';
        operator = '';
        displayValue = result.toString();
        updateDisplay();
    }

}