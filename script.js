let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let firstNumber = '';
let secondNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === 'C') {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            display.value = '';
        } else if (value === '&larr;') {
            if (firstNumber !== '') {
                firstNumber = firstNumber.slice(0, -1);
                display.value = firstNumber;
            } else if (secondNumber !== '') {
                secondNumber = secondNumber.slice(0, -1);
                display.value = secondNumber;
            }
        } else if (['+', '-', '&times;', '&divide;'].includes(value)) {
            operator = value;
            firstNumber = display.value;
            display.value = '';
        } else if (value === '&equals;') {
            secondNumber = display.value;
            let result = calculate(firstNumber, operator, secondNumber);
            display.value = result;
            firstNumber = '';
            secondNumber = '';
            operator = '';
        } else {
            if (operator === '') {
                firstNumber += value;
                display.value = firstNumber;
            } else {
                secondNumber += value;
                display.value = secondNumber;
            }
        }
    });
});

function calculate(num1, op, num2) 
{
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '&times;':
            return num1 * num2;
        case '&divide;':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error';
            }
    }
}
