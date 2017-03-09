/* ternjs ref: https://atom.io/packages/atom-ternjs */
console.log(document);
console.dir(document);

//var buttons = document.querySelectorAll('.btn');



var numberButtons = document.querySelectorAll('.btn-num');

var btn_add = document.querySelector('.btn-add');
var btn_sub = document.querySelector('.btn-sub');
var btn_mult = document.querySelector('.btn-mult');
var btn_div = document.querySelector('.btn-div');
var btn_mod = document.querySelector('.btn-mod');
var btn_equals = document.querySelector('.btn-equals');


var numberDisplay = document.querySelector('#number-display');

var currentNumber = '';
var previousNumber = '';
var currentOperator = '';

var readyToReset = false;

console.log('\n:::::::::::::: \n' +
            '🔸 btn ➕ : ' + btn_add  + '\n' +
            '🔸 btn ➖ : ' + btn_sub  + '\n' +
            '🔸 btn ✖️ : ' + btn_mult  + '\n' +
            '🔸 btn ➗ : ' + btn_div  + '\n' +
            '🔸 btn % : ' + btn_mod  + '\n' +
            '🔸 btn = : ' + btn_equals  + '\n' +
            '🔸 number display = : ' + numberDisplay + '\n' +
            ':::::::::::::::::::\n ');

function updateDisplay() {
    numberDisplay.innerText = currentNumber;
}

function clearAll() {
  currentNumber = '';
  previousNumber = '';
  currentOperator = '';
  updateDisplay();
}

// define functions
function numberInput(button) {
  if (button.name === 'C'){
    clearAll();
  }
  else {
    currentNumber = String(currentNumber) + button.name;
    updateDisplay();
  }
}


// set up event listenders

for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function(){
    numberInput(this);
  });
}

function doMath(operator) {
  var val1 = parseFloat(previousNumber);
  var val2 = parseFloat(currentNumber);
  var result;

  if (operator === 'add'){
    result = val1 + val2;
    console.log(val1 + ' + ' + val2 + ' = ' + result);
  }
  else if (operator === 'sub') {
    result = val1 - val2;
    console.log(val1 + ' - ' + val2 + ' = ' + result);
  }
  else if (operator === 'mult') {
    result = val1 * val2;
    console.log(val1 + ' * ' + val2 + ' = ' + result);
  }
  else if (operator === 'div') {
    result = val1 / val2;
    console.log(val1 + ' / ' + val2 + ' = ' + result);
  }
  else if (operator === 'mod') {
    result = val1 % val2;
    console.log(val1 + ' % ' + val2 + ' = ' + result);
  }
  else {
    console.log('error');
  }

  currentNumber = result;
  updateDisplay();

}


// actions
btn_add.onclick = function() {
  console.log('action: add ➕');
  currentOperator = 'add';
  previousNumber = currentNumber;
  currentNumber = '';
  updateDisplay();
};

btn_sub.onclick = function() {
  console.log('action: subtract ➖');
  currentOperator = 'sub';
  previousNumber = currentNumber;
  currentNumber = '';
};

btn_mult.onclick = function() {
  console.log('action: multiply ✖️');
  currentOperator = 'mult';
  previousNumber = currentNumber;
  currentNumber = '';
};

btn_div.onclick = function() {
  console.log('action: divide ➗');
  currentOperator = 'div';
  previousNumber = currentNumber;
  currentNumber = '';
};

btn_mod.onclick = function() {
  console.log('action: mod %');
  currentOperator = 'mod';
  previousNumber = currentNumber;
  currentNumber = '';
};

btn_equals.onclick = function() {
  console.log('action: equals =');
  doMath(currentOperator);
  currentOperator = '';
};




// begin page!
updateDisplay();
