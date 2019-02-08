const display = document.querySelector('.calculator input[name=display]');

document.querySelectorAll('.digits, .opers')
    .forEach(btn => btn.addEventListener('click', digitOperPressed));

function digitOperPressed(e) {
    display.value += e.target.innerText;
    if (display.value.slice(0) === '/' ||
        display.value.slice(0) === '*' ||
        display.value.slice(0) === '+') {
        display.value = '';
    }
    if (display.value.slice(0) === '.') {
        display.value = '0.';
    // for (let i = 0; i < display.value.length; i++) {
    //     if (display.value.slice(i).classList.contains('opers') && display.value.slice(i+1).classList.contains('opers')) {
    //         display.value = display.value.slice(i, '');
    //     }
    // } 
    }
}


document.querySelector('.result')
    .addEventListener('click', function() {
        display.value = eval(display.value);
    });

document.querySelector('.clear')
    .addEventListener('click', function() {
        display.value = '';
    });

document.querySelector('.clearLast')
    .addEventListener('click', function() {
        display.value = display.value.slice(0, -1);
    });

document.querySelector('.squareRoot')
    .addEventListener('click', function() {
        display.value = Math.sqrt(display.value);
    });

document.querySelector('.pi')
    .addEventListener('click', function() {
        display.value += Math.PI.toFixed(4);;
    });
