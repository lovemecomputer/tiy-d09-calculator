/* ternjs ref: https://atom.io/packages/atom-ternjs */
console.log(document);
console.dir(document);


// find objects
var numberButtons = document.querySelectorAll('.numbers .btn');
var operatorButtons = document.querySelectorAll('.operators .btn');
var btn_equals = document.querySelector('.btn-equals');
var numberDisplay = document.querySelector('#number-display-value');
var operatorDisplay = document.querySelector('#operator-display');

var currentOperator = '';
var currentNumber = '';
var previousNumber = '';

console.log(numberButtons);
console.log(operatorButtons);
console.log(btn_equals);
console.log(numberDisplay);
console.log(operatorDisplay);


//set up button behavior functions
function numberInput(input) {
  if(input === 'C') {
    clearAll();
  } else if(typeof input === 'string') {
    //input number
    currentNumber += input;
  }
  updateDisplay();
}

function setOperator(input) {



  if( String(previousNumber) !== '' && String(currentNumber) ) {

  }



  //if we have no currentNumber or previousNumber, do nothing

  //if we're pushing operators continually before typing in a new number,
  //just keep changing the operator w/ no other action

  //else, add previousNumber to currentNumber,
  //set previousNumber to result
  //clear currentNumber
  //set operator

  /*if(String(currentNumber) === '' && String(previousNumber) === '') {
    // do nothing
  }
  else if (String(currentNumber) === '' && String(previousNumber) !== '') {
    currentOperator = input;
  } else {
    doMath();
    previousNumber = currentNumber;
    currentNumber = '';
    currentOperator = input;
  }
  updateDisplay();*/
}

btn_equals.addEventListener('click', function() {
  doMath();
  updateDisplay();

});


for(var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function(){numberInput(this.innerText);});
}

for(var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function(){setOperator(this.innerText);});
}




//functions for other behaviors
function updateDisplay() {
    numberDisplay.innerText = currentNumber;
    operatorDisplay.innerText = currentOperator;
}

function clearAll() {
  console.log('CLEAR');
  currentNumber = '';
  currentOperator = '';

  updateDisplay();
}


function doMath() {
  var result;

  if (currentOperator === '+'){
    result = previousNumber + currentNumber;
    console.log(previousNumber + ' + ' + currentNumber + ' = ' + result);
  }
  else if (currentOperator === '-') {
    result = previousNumber - currentNumber;
    console.log(previousNumber + ' - ' + currentNumber + ' = ' + result);
  }
  else if (currentOperator === '*') {
    result = previousNumber * currentNumber;
    console.log(previousNumber + ' * ' + currentNumber + ' = ' + result);
  }
  else if (currentOperator === '/') {
    result = previousNumber / currentNumber;
    console.log(previousNumber + ' / ' + currentNumber + ' = ' + result);
  }
  else if (currentOperator === '%') {
    result = previousNumber % currentNumber;
    console.log(previousNumber + ' % ' + currentNumber + ' = ' + result);
  }
  else {
    console.log('error');
  }
  return result;
}
