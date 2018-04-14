
// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return returnFirst[0];
}
returnFirst(9,3,"goo",true);

function returnLast(arr) {
  // return the last item of the array
  return returnLast[3];
}
returnLast([9,3,"goo",true]);

function getArrayLength(arr) {
  // return the length of the array
  return getArrayLength.lenght[];
}

getArrayLength([9,3,"goo",true]);

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  for(let i = 0; i <= 9; i++);{
  
  // return the array
  return incrementByOne[i];
    
  }
}
incrementByOne([3,6,9]);

function addItemToArray(arr, item) {
  // add the item to the end of the array
  Array.add(addItemToArray, 'Result R');
  // return the array
  return addItemToArray[];
}
addItemToArray(['Maria j', 'Avi J', 'Pra J']);


function addItemToFront(arr, item) {
  // add the item to the front of the array
 Array.unshift(addItemToArray, 'Result R');
  // return the array
  return addItemToArray[];
}
addItemToArray(['Maria j', 'Avi J', 'Pra J'],'NAMES');

function wordsToSentence(words) {
  // words is an array of strings
 var words=['BMW', 'CAR', 'MAONGO', 'FRUIT'];
  // return a string that is all of the words concatenated together
  return words[words, + ' '];
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}


function contains(arr, item) {
  
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for(let i=0; i < arr.length; i++) {
        if (arr[i] === item){ 
          return true;
        }
    else {
      return false;
    }
  
}
contains([3,6,9], 3); 
  
function addNumbers(numbers) {
  // numbers is an array of integers.
  console.log([addNumbers])
  // add all of the integers and return the value
  return (addNumbers[0] + [1]);
}
addNumbers([3,9]);
  
  
function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
   for(let i=0; i < testScores.length; i++) {
   averageTestScore= (testScores[i] / testScores.length) * testScores.length
}
 return averageTestScore[];
}

  averageTestScore([100,75,10]);
  
  
function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  return Math.max(largestNumber[]);
}
largestNumber([1,2,3 ,9]);
  
function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  
  for (i = 0; i < arguments.length; i++) {
      return (multiplyArguments *= arguments.length[i] ); 
           if multiplyArguments([]) = arguments.length[]);{
           return 0; 
           }
      else if (multiplyArguments([]) = arguments.length[0]); {
      return 
      }
        }
    
 
}
multiplyArguments([0]);
multiplyArguments([]);
  

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
