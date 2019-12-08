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
    firstNumber='';
    secondNumber='';
    toggle=0;
    dotCounter = 0;
}

btn1.addEventListener('click', function(){
    if (toggle===0){
        if (counter === 1) {
            let holder = "1";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = 1;
            counter = 1;
            firstNumber = '1';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = "1";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = 1;
            secondCounter = 1;
            secondNumber = '1';
        }
    }
    charProtection = 0;
});


btn2.addEventListener('click', function(){
    if (toggle===0){
        if (counter === 1) {
            let holder = "2";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = 2;
            counter = 1;
            firstNumber = '2';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = "2";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = 2;
            secondCounter = 1;
            secondNumber = '2';
        }
    }
    charProtection = 0;
});

btn3.addEventListener('click', function(){
    if (toggle===0){
        if (counter === 1) {
            let holder = "3";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = 3;
            counter = 1;
            firstNumber = '3';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = "3";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = 3;
            secondCounter = 1;
            secondNumber = '3';
        }
    }
    charProtection = 0;
});

btn4.addEventListener('click', function(){
    if (toggle===0){
        if (counter === 1) {
            let holder = "4";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = 4;
            counter = 1;
            firstNumber = '4';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = "4";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = 4;
            secondCounter = 1;
            secondNumber = '4';
        }
    }
    charProtection = 0;
});

btn5.addEventListener('click', function(){
    if (toggle===0){
        if (counter === 1) {
            let holder = "5";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = 5;
            counter = 1;
            firstNumber = '5';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = "5";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = 5;
            secondCounter = 1;
            secondNumber = '5';
        }
    }
    charProtection = 0;
});

btn6.addEventListener('click', function(){
    if (toggle===0){
        if (counter === 1) {
            let holder = "6";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = 6;
            counter = 1;
            firstNumber = '6';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = "6";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = 6;
            secondCounter = 1;
            secondNumber = '6';
        }
    }
    charProtection = 0;
});

btn7.addEventListener('click', function(){
    if (toggle===0){
        if (counter === 1) {
            let holder = "7";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = 7;
            counter = 1;
            firstNumber = '7';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = "7";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = 7;
            secondCounter = 1;
            secondNumber = '7';
        }
    }
    charProtection = 0;
});

btn8.addEventListener('click', function(){
    if (toggle===0){
        if (counter === 1) {
            let holder = "8";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = 8;
            counter = 1;
            firstNumber = '8';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = "8";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = 8;
            secondCounter = 1;
            secondNumber = '8';
        }
    }
    charProtection = 0;
});

btn9.addEventListener('click', function(){
    if (toggle===0){
        if (counter === 1) {
            let holder = "9";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = 9;
            counter = 1;
            firstNumber = '9';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = "9";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = 9;
            secondCounter = 1;
            secondNumber = '9';
        }
    }
    charProtection = 0;
});

btn0.addEventListener('click', function(){
    if (toggle===0){
        if (counter === 1) {
            let holder = "0";
            firstNumber = firstNumber + holder;
            display.textContent = firstNumber;
        }
        else{
            display.textContent = 0;
            counter = 1;
            firstNumber = '0';
        }
    }

    else {
        if (secondCounter === 1) {
            let holder = "0";
            secondNumber = secondNumber + holder;
            display.textContent = secondNumber;
        }
        else{
            display.textContent = 0;
            secondCounter = 1;
            secondNumber = '0';
        }
    }
    charProtection = 0;
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
    charProtection = 1;

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