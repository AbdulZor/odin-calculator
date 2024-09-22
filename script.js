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

let leftOperand;
let operator;
let rightOperand;

function operate(operator, operandX, operandY) {
    switch (operator) {
        case '+':
            return add(operandX, operandY);
        case '-':
            return subtract(operandX, operandY);
        case '*':
            return multiply(operandX, operandY);
        case '/':
            return divide(operandX, operandY);
    }
}