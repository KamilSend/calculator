const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');
const btn4 = document.getElementById('four');
const btn5 = document.getElementById('five');
const btn6 = document.getElementById('six');
const btn7 = document.getElementById('seven');
const btn8 = document.getElementById('eight');
const btn9 = document.getElementById('nine');
const btn0 = document.getElementById('zero');
const btndot = document.getElementById('dot');
const btnplus = document.getElementById('plus');
const btnmultiplication = document.getElementById('multiplication');
const btndivision = document.getElementById('division');
const btnsubtraction = document.getElementById('subtraction');
const btnclear = document.getElementById('clear');
const btnequals = document.getElementById('equals');
const display = document.querySelector('button:nth-child(1)');

let firstNumber ='0';
let secondNumber = 0;
let toggle=0;
let char=0;
let counter= 0;
let secondCounter= 0;
let dotCounter=0;
let charProtection = 0;

//11,12,13,14,15,16 CE, X, /, ., -, +


function result() {
    if (toggle===0){
        display.textContent = parseFloat(firstNumber);
    }
    else{
        if (char===16){
            if (secondNumber===''){
                display.textContent = parseFloat(firstNumber);
                charProtection = 0;
            }
            else{
                display.textContent = parseFloat(firstNumber) + parseFloat(secondNumber);
            }
        }

        else if (char===17){
            if (secondNumber===''){
                display.textContent = parseFloat(firstNumber);
                charProtection = 0;
            }
            else{
                display.textContent = parseFloat(firstNumber) - parseFloat(secondNumber);
            }
        }

        else if (char===18){
            if (secondNumber===''){
                display.textContent = parseFloat(firstNumber);
                charProtection = 0;
            }
            else{
                display.textContent = parseFloat(firstNumber) * parseFloat(secondNumber);
            }
        }

        else if (char===19){
            if (secondNumber===''){
                display.textContent = parseFloat(firstNumber);
                charProtection = 0;
            }
            else{
                if (parseFloat(secondNumber) === 0){
                    alert('Nie można dzielić przez 0');
                }
                else{
                    display.textContent = parseFloat(firstNumber) / parseFloat(secondNumber);
                }
            }
        }
    }

    dotCounter = 0;
    secondNumber = '';
    char = 0;
}

function clear(){
    display.textContent = "";
    firstNumber='0';
    secondNumber='';
    toggle=0;
    dotCounter = 0;
    charProtection = 0;

    char = 0;
    counter= 0;
    secondCounter= 0;
}


function number(digit){
    if (toggle===0){
        if (counter === 1) {
            let holder = digit.toString();
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = digit;
            counter = 1;
            firstNumber = digit;
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = digit.toString();
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = digit;
            secondCounter = 1;
            secondNumber = digit.toString();
        }
    }
    charProtection = 0;
}
btn1.addEventListener('click', function(){
    number(1);
});

btn2.addEventListener('click', function(){
    number(2);
});

btn3.addEventListener('click', function(){
    number(3);
});

btn4.addEventListener('click', function(){
    number(4);
});

btn5.addEventListener('click', function(){
    number(5);
});

btn6.addEventListener('click', function(){
    number(6);
});

btn7.addEventListener('click', function(){
    number(7);
});

btn8.addEventListener('click', function(){
    number(8);
});

btn9.addEventListener('click', function(){
    number(9);
});

btn0.addEventListener('click', function(){
    number(0);
});

btndot.addEventListener('click', function(){

if(dotCounter===0){
    if (toggle===0){
        if (counter === 1) {
            let holder = ".";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent ='.';
            counter = 1;
            firstNumber = '.';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = ".";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = '.';
            secondCounter = 1;
            secondNumber = '.';
        }
    }

    dotCounter = 1;
}

});

btnplus.addEventListener('click', function(){
    if(charProtection === 0){
        if (toggle===0){
            toggle = 1;
        }

        else {
            result();
            firstNumber=display.textContent;
            secondNumber='';
        }

        char = 16;
    }
    charProtection = 1;
});

btnsubtraction.addEventListener('click', function(){
    if(charProtection === 0){
        if (toggle===0){
            toggle = 1;
        }

        else {
            result();
            firstNumber=display.textContent;
            secondNumber='';
        }

        char = 17;
    }

    else if (charProtection === 1){
        if (char===16){
            char=17;
            display.textContent = '-';
        }
        else{
            firstNumber = firstNumber * -1;
            display.textContent = '-';
        }
    }
    charProtection = 2;

    if ((firstNumber==='0') || (firstNumber==='') || (firstNumber===0)) {
        display.textContent = '-';
    }

});

btnmultiplication.addEventListener('click', function(){

    if(charProtection ===0){
        if (toggle===0){
            toggle = 1;
        }

        else {
            result();
            firstNumber=display.textContent;
            secondNumber='';
        }

        char = 18;
    }

    charProtection = 1;

});

btndivision.addEventListener('click', function(){
    if(charProtection ===0){
        if (toggle===0){
            toggle = 1;
        }

        else {
            result();
            firstNumber=display.textContent;
            secondNumber='';
        }

        char = 19;
    }

    charProtection = 1;

});

btnequals.addEventListener('click', function(){

    if (secondCounter === 0){
        charProtection = 0;
        display.textContent = firstNumber;
    }

    else{
        result();
    }

});

btnclear.addEventListener('click', function(){
    clear();
});