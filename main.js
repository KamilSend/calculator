const btn2 = document.querySelectorAll('.number');
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
let toggle=0;//wprowadzanie pierwszej lub drugiej liczby
let char=0;//określa rodzaj działania, kropke lub wyzerowanie
let counter= 0;//umożliwiają wielocyfrowe liczby
let secondCounter= 0;//sprawdza czy była wpisana druga liczba
let dotCounter=0;//uniemożliwia wciśnięcie kropki więcej niż raz
let charProtection = 0;//uniemożliwia wciśnięcie dwa razy działania
let minusOperator = 0;//do sprawdzenia czy wyświetlić minus przed liczbą

//11,12,13,14,15,16 CE, X, /, ., -, +

//ta funkcja sprawdza czy są już obie liczby i można wykonać działanie
function makeSecondNumber(){
    if (secondNumber===''){
        display.textContent = parseFloat(firstNumber);
        charProtection = 0;
        return 1;
    }
    else return 0;
}

function result() {
    if (toggle===0){
        display.textContent = parseFloat(firstNumber);
    }
    else{
        switch (char){
            case 16:
                if (makeSecondNumber()){}
                else{
                    display.textContent = parseFloat(firstNumber) + parseFloat(secondNumber);
                }
                break;
            case 17:
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
            case 19:
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
}


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


function number(digit){
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

for (let i=0; i<=9; i++){
    btn2[i].addEventListener('click', function(){
        //potrzebny taki myk bo przyciski są pobrane w kolejności od 1-9 i dopiero 0
        if (i===9){
            number(0);
        }
         else {
            number(i + 1);
        }
    });
}

btndot.addEventListener('click',() => {

if(dotCounter===0){
    if (toggle===0){
        //console.log('dupa')
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
        //console.log('dupa');
        if (secondCounter === 1) {
            let holder = ".";
            secondNumber = secondNumber + holder;
            if(minusOperator){
                display.textContent = '-' + secondNumber;
            }
            else{
                display.textContent = secondNumber;
            }
        }
        else{
            if (minusOperator === 1){
                display.textContent ='-0.';
                //console.log('dupa');
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