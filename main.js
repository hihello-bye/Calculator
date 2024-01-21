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
    if (operator === '') { 
        if (digit === '.' && number1.includes('.')) {
            return;
        }
        number1 += digit;
    } else {
        if (digit === '.' && number2.includes('.')) {
            return;
        }
        number2 += digit;
    }
    displayValue = operator !== '' ? number2 : number1;
    updateDisplay();

}

function setOperator(op){
    if (number1 === '') {
        number1 = displayValue;
        operator = op;
        displayValue = number1 + op;
    } 
    else {
        operator = op;
        displayValue = op; 
        updateDisplay();
    }
    number2 = '';

} 

function calculate() {
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
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    number1 = '';
    number2 = '';
    operator = '';
    displayValue = '';
    updateDisplay();
}

function backspace() {
    if (operator ==='') {
        number1 =number1.slice(0,-1);
    }
    else {
        number2 = number2.slice(0,-1);
    }
    displayValue = operator !== ''? number2 : number1;
    updateDisplay();
}

document.addEventListener('keydown', keyPress);

function keyPress(event) {
    const key = event.key 
    if (/[0-9]/.test(key)) {
        appendDigit(key);
    }
    else if (['+','-','*','/'].includes(key)) {
        setOperator(key);
    }
    else if (key === '.') {
        appendDigit('.');
    }
    else if (key === 'Enter') {
        calculate();
    }
    else if (key === 'Backspace') {
        backspace();
    }
    else if (key === 'c' || key === 'C') {
        clearDisplay();
    }

}