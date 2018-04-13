//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'Hola';

//create a number variable, it an be any number
const newNum = 9;

//create a boolean variable
const newBool = true;

//solve the following math problem
const newSubtract = 10 - 5=== 5;


//Solve the following math problem
const newMultiply = 10 * 4=== 40 ;


//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;




//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  //simply return the string provided: str
  return ;
}

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  return x + y;
  add(9,3);
function subtract(x, y) {
  // subtract y from x and return the value
  return x - y;
}
subtract(9,3);


function multiply(x, y) {
  // multiply x by y and return the value
  return x * y;
}
multiply(9,3);
function divide(x, y) {
  // divide x by y and return the value
  return x/y;
}
divide (9,3);
function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if (x == y);
  return true;
  elseif;
  return false;
}
areEqual (9,3);
function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  if (areSameLength.length )areEqual;
  return true;
  elseif
  return false;

}
areSameLength('Sello','Sam');

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  if (lessThanNinety < 9);
  return true;
  elseif
  return false;

}
lessThanNinety(3);

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if (greaterThanNinety  > 9);
  return true;
  elseif
  return false;
} 
greaterThanNinety(9);


function getRemainder(x, y) {
  // return the remainder from dividing x by y
  return x%y;
}
getRemainder(9,3);

function isEven(num) {
  // return true if num is even
  // otherwise return false
  if (isEven  == num);
  return true;
  elseif
  return false;
}
isEven(2);

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  if (isOdd  == num);
  return true;
  elseif
  return false;
}
isOdd(2);

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  return Math.sqrt(num);
}
square(3)
function cube(num) {
  // cube num and return the new value
  return Math.cube(num)
}
cube(3);
function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  return Math.SQRT2(num);
}
raisedTopower(3);
function roundNumber(num) {
  // round num and return it
  return Math.round();
}

function roundUp(num) {
  // round num up and return it
  return Math.ceil(num);
}
roundUp(1.1);
function addExclamationPoint(str,str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  return addExclamationPoint(str) + '!';
}
addExclamationPoint(hello, world);

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  return combineNames(firstName +   lastName);
}

combineNames(lamba,School);

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  return getGreeting('Hello' + name);
} 
getGreeting(Sam);
// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  return Math.sqrt(length,width);
}
getRectangleArea(9,9);

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
return Math.sqrt(base,height);
}
getTriangleArea(3,3);
// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
