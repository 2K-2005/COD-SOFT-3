const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        const buttonValue = button.textContent;

        if (buttonId === 'clear')
            {
                display.value = '';
            } else if (buttonId === 'backspace') 
                {
                    display.value = display.value.slice(0, -1);
        } else if (buttonId === 'equals') {
            try {
                display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
            } catch {
                display.value = 'Error';
            }
        } else {
            if (buttonId === 'divide') {
                display.value += '/';
            } else if (buttonId === 'multiply') {
                display.value += '*';
            } else if (buttonId === 'subtract') {
                display.value += '-';
            } else if (buttonId === 'add') {
                display.value += '+';
            } else {
                display.value += buttonValue;
            }
        }
    });
});
