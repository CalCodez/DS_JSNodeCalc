//**Command Line App */
//NOTE: Below: How to init the readline program in treminal
//-> node filename.js

const rs = require('readline-sync');
let operator = ['+', '-', '*', '/'];
let num1 = null;
let num2 = null;
let newEq = false;
let add = (arg1, arg2) => arg1 + arg2;
let sub = (arg1, arg2) => arg1 - arg2;
let mul = (arg1, arg2) => arg1 * arg2;
let did = (arg1, arg2) => arg1 / arg2;


//**NOTE: Have user select operatopr */

function getOperator() {
  rs.setDefaultOptions({ limit: [operator] });
  operator = rs.question('What operation would you like to run ? ', {
    limitMessage: 'INVALID OPRATION!, Please use [+, -, *, /]',
  });
  return operator;

}

//**NOTE: Have user enter 1st number */


function getFirstNumber() {
  num1 = rs.questionInt('Please enter the firt number: ', { LimitMessage: 'INVALID NUMBER! Please Try again ', });
  return num1;
}

//**NOTE: Have user enter 2nd number */


function getSecondNumber() {
  num2 = rs.questionInt('Please enter the second number: ', { LimitMessage: 'INVALID NUMBER! Please Try again ', });
  return num2;
}

function solveEqua(operator) {
  if (operator === '+') {
    console.log('Answer: ' + (add(num1, num2)));
  }
  if (operator === '-') {
    console.log('Answer: ' + (sub(num1, num2)));
  }
  if (operator === '*') {
    console.log('Answer: ' + (mul(num1, num2)));
  } if (operator === '/') {
    console.log('Answer: ' + (did(num1, num2)));
  }
}


function newEqu() {
  newEq = rs.keyInYNStrict('Would you like to run another equation using the same operator? ');
  if (newEq) {
    getFirstNumber();
    getSecondNumber();
    solveEqua(operator);
    newEqu();
  }
  else {
    console.log('Ok cool! Restart program to use a different operator.')
  }

}

getOperator();
getFirstNumber();
getSecondNumber();
solveEqua(operator);
newEqu();