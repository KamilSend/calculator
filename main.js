//variables containing calculator buttons and screen
const btn2 = document.querySelectorAll('.number');
const btndot = document.getElementById('dot');
const btnplus = document.getElementById('plus');
const btnmultiplication = document.getElementById('multiplication');
const btndivision = document.getElementById('division');
const btnsubtraction = document.getElementById('subtraction');
const btnclear = document.getElementById('clear');
const btnequals = document.getElementById('equals');
const display = document.querySelector('button:nth-child(1)');

//variables for functionality
let firstNumber ='0';
let secondNumber = 0;
let toggle=0;//check if we put the first or the second number
let char=0;//set the type of operation, put the dot or clear everything
let counter= 0;//enables multi-digit numbers
let secondCounter= 0;//check for the second number
let dotCounter=0;//preventing typing dot more then one time in one number
let charProtection = 0;//preventing clicking button equal more then one time
let minusOperator = 0;//display "-" before the number if it is negative

//check if both number where set
function makeSecondNumber(){
    if (secondNumber===''){
        display.textContent = parseFloat(firstNumber);
        charProtection = 0;
        return 1;
    }
    else return 0;
}

//main function making mathematical operations
function result() {
    if (toggle===0){
        display.textContent = parseFloat(firstNumber);
    }
    else{
        switch (char){
            case 16://addition
                if (makeSecondNumber()){}
                else{
                    display.textContent = parseFloat(firstNumber) + parseFloat(secondNumber);
                }
                break;
            case 17://subtraction
                if (makeSecondNumber()){}
                else{
                    display.textContent = parseFloat(firstNumber) - parseFloat(secondNumber);
                }
                break;
            case 18://multiplication
                if (makeSecondNumber()){}
                else{
                    display.textContent = parseFloat(firstNumber) * parseFloat(secondNumber);
                }
                break;
            case 19://division
                if (makeSecondNumber()){}
                else{
                    if (parseFloat(secondNumber) === 0){
                        alert('Nie można dzielić przez 0');
                    }
                    else{
                        display.textContent = parseFloat(firstNumber) / parseFloat(secondNumber);
                    }
                }
                break;
        }
    }

    dotCounter = 0;
    secondNumber = '';
    char = 0;
    secondCounter = 0;
}

//function for button clear - it's clearing screen and all variables
function clear(){
    display.textContent = "";
    firstNumber ='0';
    secondNumber ='';
    toggle =0;
    dotCounter = 0;
    charProtection = 0;

    char = 0;
    counter = 0;
    secondCounter = 0;
    minusOperator = 0;
}

//display numbers at the screen
function number(digit){
    //do this for the first number
    if (toggle===0){
        if (counter === 1) {
            let holder = digit.toString();//sprawdzić czy tego nie można pominąć
            if (firstNumber.length < 15){
                firstNumber = firstNumber + holder;
                display.textContent = firstNumber.toString();
            }
        }
        else{
            display.textContent = digit;
            counter = 1;
            firstNumber = digit.toString();
        }
    }

    //do this for the second number
    else {
        if (secondCounter === 1) {
            let holder = digit.toString();
            if (secondNumber.length < 16) {
                secondNumber = secondNumber + holder;
                if (minusOperator === 1) {
                    if (secondNumber == 0){
                        display.textContent = "-0";
                    }else
                    display.textContent = -secondNumber;
                }
                else
                    display.textContent = secondNumber;
            }
        }

        else{
            if (minusOperator === 1){
                if (digit == 0){
                    display.textContent = "-0";
                }
                display.textContent = -digit;
            }
            else
                display.textContent = digit;

            secondCounter = 1;
            secondNumber = digit.toString();
        }
    }

    charProtection = 0;

    if(digit === 0 && minusOperator === 1){
        display.textContent = '-0';
    }
}

//handle displaying mathematical sign
function sign(sign){
        if (charProtection === 0) {
            if (toggle === 0) {
                toggle = 1;
                dotCounter = 0;
            } else {
                result();
                firstNumber = display.textContent;
                secondNumber = '';
            }
            char = sign;
        }

        charProtection = 1;
        minusOperator = 0;
}

//put button '0' in front of 1,2,3...
for (let i=0; i<=9; i++){
    btn2[i].addEventListener('click', function(){
        if (i===9){
            number(0);
        }
         else {
            number(i + 1);
        }
    });
}

//handle dot buttons for real numbers and displaying dots
btndot.addEventListener('click',() => {
    if(dotCounter===0){
        if (toggle===0){
            if (counter === 1) {
                let holder = ".";
                firstNumber = firstNumber + holder;
                display.textContent = firstNumber;
            }
            else{
                let holder = ".";
                number(0);
                firstNumber = firstNumber + holder;
                display.textContent = firstNumber;
            }
        }

        else {
            if (secondCounter === 1) {
                let holder = ".";

                if(minusOperator){
                    secondNumber = secondNumber + holder;
                    display.textContent = '-' + secondNumber;
                }
                else{
                    secondNumber = secondNumber + holder;
                    display.textContent = secondNumber;
                }
            }
            else{
                if (minusOperator === 1){
                    display.textContent ='-0.';
                    let holder = ".";
                    number(0);
                    secondNumber = secondNumber + holder;
                    display.textContent = '-' + secondNumber;
                }
                else{
                    let holder = ".";
                    number(0);
                    secondNumber = secondNumber + holder;
                    display.textContent = secondNumber;
                }
                counter = 1;
            }
        }

        dotCounter = 1;
    }
});

btnplus.addEventListener('click', function(){
    sign(16);
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
    minusOperator = 1;

    if ((firstNumber==='0') || (firstNumber==='') || (firstNumber===0)) {
        display.textContent = '-';
    }
});

btnmultiplication.addEventListener('click', function(){
    sign(18);
});

btndivision.addEventListener('click', function(){
    sign(19);
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