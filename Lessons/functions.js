/* 
FUNCTIONS
- Functions provide a block of code that will only be ran once it is called upon.

- Functions must start off with the keyword of `function` followed by the name you give your function.

- Functions do NOT need to have arguments or parameters.

- Functions can be created anywhere in the code, and be called regardless of if it is above or below the call.

- Functions can and most likely will return something.


*/

/* 
1- keyword function
2- function name
3- parameters/arguments (optional)
*/
// be descriptive with arguments and parameters
// you must call the function for it to be executed.
// (1)      (2)  (3)
function example1() {
  //  This block of code will only be excecuted when the function is called.

  console.log("example1 function Was Executed");
}

example1();

let player1Score = 10000;

function resetPlayerScore() {
  player1Score = 0;
}

resetPlayerScore();

console.log(player1Score);

// Example of functions with arguments
// ! Arguments are comma separated
function example2(param1, param2) {
  console.log("Example 2 function was executed");
  console.log("param1", param1);
  console.log("param2", param2);
}

// if a function is called without arguments it will still run, but as undefined.
example2("hello", "World");
example2("Brent", "Brown");
example2();

function sumTwoNumbers(number1, number2) {
  let total = number1 + number2;
  return total;
}

let sum1 = sumTwoNumbers(10, 5);
console.log(sum1);

function convertDegreeFtoDegreeC(tempInDegreeF) {
  let tempDegreeC = (5 / 9) * (tempInDegreeF - 32);
  return tempDegreeC.toFixed(2);
}

console.log(convertDegreeFtoDegreeC(32));
console.log(convertDegreeFtoDegreeC(212));
console.log(convertDegreeFtoDegreeC(70));

// ? Write a function that will accept a dog's age and returns a human age.
// ? Human Age = (Dog age -2) X 4 +21

function calcDogYearsToHumanYears(dogAge) {
  let humanAge = (dogAge - 2) * 4 + 21;
  return humanAge;
}

console.log(calcDogYearsToHumanYears(2));
console.log(calcDogYearsToHumanYears(7));

// ? Write a function that will take 3 arguments (length, width, height)
// ? Function should return the volume of the

function calcVolumeOfCuboid(length, width, height) {
  let volumeOfCuboid = length * width * height;
  return volumeOfCuboid;
}

console.log(calcVolumeOfCuboid(10, 5, 20), "in^3");

// ! Important function for project

function randomNum(min, max) {
  let range = max - min + 1;
  console.log("Function ran");
  return Math.floor(Math.random() * range) + min;
}

let minRange = 1;
let maxRange = 10;
let computerRandomNumber = randomNum(minRange, maxRange);
console.log(computerRandomNumber);

// ! Refactoring Functions

function sumTwoNumbers(number1, number2) {
  let total = number1 + number2;
  return total;
}

// instead you can do the following

function sumTwoNumbers(number1, number2) {
  return number1 + number2;
}

// ? Write a function that will return the value true if divided evenly
// ? Function should return a message if the second number is larger than the first number

function isEvenlyDivisible(firstNumber, secondNumber) {
  if (secondNumber > firstNumber) {
    return "Your second number is larger than the First";
  }

  if (firstNumber % secondNumber === 0) {
    return true;
  } else {
    return false;
  }
}

//  same as above function

function isEvenlyDivisible(firstNumber, secondNumber) {
  if (secondNumber > firstNumber)
    return "Your second number is larger than the First";
  return firstNumber % secondNumber === 0 ? true : false;
}
console.log(isEvenlyDivisible(20, 40));

// ! Maybe some code for project

// cleanup functions can be great for defeating the weirdos "sanitizing"

function userInputCleaner(words) {
  return words.toLowerCase().trim();
}

let userInput2 = userInputCleaner("Q    ");

if (userInput2 == "q") {
  console.log("User wants to quit");
} else {
  console.log("Keep going");
}
