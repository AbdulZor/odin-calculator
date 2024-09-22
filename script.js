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
            return add(+operandX, +operandY);
        case '-':
            return subtract(operandX, operandY);
        case '*':
            return multiply(operandX, operandY);
        case '/':
            if (operandY == 0) return false;
            return divide(operandX, operandY);
    }
}


const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
numbers.forEach((val) => {
    val.addEventListener('click', () => {
        if (display.textContent === operator) {
            display.textContent = '';
        }
        display.textContent += val.textContent;
    });
});



// When numbers are entered and then an operation is clicked, we need to store the left number as the left operand.
// However, if there is already a left operand value, we need to apply the last operator function to it and then
// store the new result as the left operand.
// PSEUDO
// AT NEW OPERATOR ENTER:
// IF left_operand NOT NULL AND operator NOT NULL:
//      left_operand = operate(operator, left_operand, display_value)
//      operator = clicked_value
//      display_value = clicked_value

const operators = document.querySelectorAll('.operation');
operators.forEach((val) => {
    val.addEventListener('click', () => {
        switch (val.textContent) {
            case '=':
                if (leftOperand && operator) {
                    rightOperand = display.textContent;
                    let operateVal = operate(operator, leftOperand, rightOperand);
                    if (!operateVal) {
                        display.textContent = 'Cannot divide by zero';
                        break;
                    }
                    display.textContent = operateVal;

                    // shorten longer decimals to a fixed number of decimals
                    if (operateVal.toString().includes('.') && operateVal.toString().length - operateVal.toString().indexOf('.') > 10) {
                        display.textContent = operateVal.toFixed(10);
                    }

                    leftOperand = display.textContent;
                    operator = null;
                    rightOperand = null;
                }
                break;
            case 'C':
                resetCalculator();
                break;
            default: // normal arithmetic operations
                if (leftOperand && operator) {
                    let operateVal = operate(operator, leftOperand, display.textContent);
                    if (!operateVal) {
                        display.textContent = 'Cannot divide by zero';
                        break;
                    }

                    leftOperand = operateVal
                } else {
                    leftOperand = display.textContent;
                }
                operator = val.textContent;
                display.textContent = operator;
                break;
        }

    })
});

function resetCalculator() {
    leftOperand = null;
    rightOperand = null;
    operator = null;
    display.textContent = '';
}
