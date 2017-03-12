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
  if(input === 'C')
  {
    //hit clear key
    clearAll();
  } else if(typeof input === 'string')
  {
    //number key input
    if( String(currentOperator) === '' && String(previousNumber) === '' && String(currentNumber) !== '' )
    {
      //this is the state for if we're displaying a result after previously
      //hitting the equals button
      currentNumber = input;
    }
    else
    {
      currentNumber += input;
    }
  }
  updateDisplay();
}

function setOperator(input) {


//if we have both numbers, do the math and set result to previousNumber,
//then clear currentNumber and set operator

//if we have just a currentNumber and no previousNumber, just move
//currentNumber to previousNumber and set operator

//if we have only previousNumber and no currentNumber, just change
//operator and do nothing else

//if we have no numbers, do nothing


  if( String(previousNumber) !== '' && String(currentNumber) !== '' ) {
    //if we have a value for both numbers
    previousNumber = Number(doMath());
    currentNumber = '';
    currentOperator = input;
  } else if ( String(previousNumber) === '' && String(currentNumber) !== '' ) {
    //if we have valuse for currentNumber only
    previousNumber = currentNumber;
    currentNumber = '';
    currentOperator = input;
  } else if ( String(previousNumber) !== '' && String(currentNumber) === '' ) {
    //if we have only a previous number just change operator sign
    //(this is if ppl keep clicking operators without entering new number)
    currentOperator = input;
  } else if ( String(previousNumber) === '' && String(currentNumber) === '' ) {
    //if we have no numbers, do nothing
  } else {
    console.log('>>>>ERROR: unplanned setOperator error');
  }
  //always do this after a click! maybe it'll trigger a screen-flashing animation
  updateDisplay();
}

btn_equals.addEventListener('click', function() {
  if ( String(previousNumber) !== '' && String(currentNumber) !== '' ) {
    currentNumber = Number(doMath());
    previousNumber = '';
    currentOperator = '';
  }
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
    result = Number(previousNumber) + Number(currentNumber);
    console.log(Number(previousNumber) + ' + ' + Number(currentNumber) + ' = ' + result);
  }
  else if (currentOperator === '-') {
    result = Number(previousNumber) - Number(currentNumber);
    console.log(Number(previousNumber) + ' - ' + Number(currentNumber) + ' = ' + result);
  }
  else if (currentOperator === '*') {
    result = Number(previousNumber) * Number(currentNumber);
    console.log(Number(previousNumber) + ' * ' + Number(currentNumber) + ' = ' + result);
  }
  else if (currentOperator === '/') {
    result = Number(previousNumber) / Number(currentNumber);
    console.log(Number(previousNumber) + ' / ' + Number(currentNumber) + ' = ' + result);
  }
  else if (currentOperator === '%') {
    result = Number(previousNumber) % Number(currentNumber);
    console.log(Number(previousNumber) + ' % ' + Number(currentNumber) + ' = ' + result);
  }
  else {
    console.log('error');
  }
  return result;
}
