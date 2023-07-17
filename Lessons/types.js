/* 
Types - Data Types
- Strings
- Numbers
- Boolean (True/False)

*/

/* 
STRINGS:
- Datatype used to represent text
- you can use double quotes ""
- you can use single quotes ''
- you can use backticks ``
*/

let string1 = "double quotes";
// prettier-ignore
let string2 = 'single quotes';
let string3 = `backtick quotes`;

// STRING CONCATENATION
/* 
- When you add two or more strings together they will become a single string. 
- Strings will concatenate with any data type and will result in a string.
*/

let greeting = "Good Morning";
let firstName = "Brent";

console.log(greeting + " " + firstName);

// Solution using backticks to allow for the space

let fullGreeting = `${greeting} ${firstName}`;

console.log("full Greeting", fullGreeting);

//! If you want to know what type of variable you are using: use the TYPEOF

console.log(typeof firstName);

//  To determine the size of the string you use the length method
let animal = "horses";

console.log("animal size", animal.length);
// To reference a single letter in a string you can use square brackets.
// ! remember it is zero based (counting things starts at 0)

console.log("first letter:", animal[0]);

// ? if I wanted to grab the last letter of the animal what would that look like
animal = "elephant"
lastLetterNumber = animal.length
console.log(("last letter:", animal[lastLetterNumber - 1]));

// Removing White Space from a Sting using trim

let textData = "             Hello             ";
console.log("Trim Example:", textData.trim());

// Add a new line in the console

let paragraphString = "I went to the store today. \nI bought eggs and milk.";

let lineBreak = "\n";
let paragraphString2 = "I went to the story today." + lineBreak + "I bought eggs and milk."
console.log(paragraphString);
console.log(paragraphString2);


//! NUMBERS:

let currentTemp = 78;

console.log(typeof currentTemp);

//! Be careful of mismatching Strings and Numbers

let myAge = 43
let friendAge = "35"

console.log(myAge + friendAge); // problem is it combines them treating them as strings

// You can convert a string to a number
// ParseInt, number(), or a plus sign.

console.log(myAge + +friendAge);
//plus sign
console.log(myAge + Number(friendAge));
//number method
console.log(myAge + parseInt(friendAge));
// parseInt method


let fruit = "apple";

let snack = fruit;

fruit = "orange";

console.log(snack);

// SLICE method for string 

console.log("blueberry".slice(0,4));

//! Number Operators
/* 
Adding Numbers (+)
Subdracting Numbers (-)
Multiply Numbers (*)
Divide Numbers (/)

less common below
Exponents (**)
Modulus (%) divides numbers and gives you remainder (is it even or odd)
*/

// 3^3
console.log(3**3);
// 21 / 10 = remainder 1
console.log(21 % 10);
// odd number example
console.log(33 % 2);
// even number example
console.log(32 % 2);

//! shopping cart example
// cannot initialize something blank. needs a value (string, intiger, etc)
let totalPrice = 0;
let price1 = 10;
totalPrice = totalPrice + price1;

let price2 = 15;
totalPrice = totalPrice + price2;

let price3 = 7;
totalPrice += price3;

console.log(totalPrice);

// ! Funky Math

let funkyTotal = .1+.2;
console.log(funkyTotal);

console.log("fixed 2 digits", funkyTotal.toFixed(2));

let flooredNumber = 25.56
console.log("Floored Number:", Math.floor(flooredNumber * 10) / 10);

// ? how do I get 25.5 using math.floor ?

console.log(2**53);
console.log(2**53 +1);

const result = BigInt(2) ** BigInt(53) +BigInt(1);
console.log(result.toString()); //output: 9007199254740993 (correct integer, but listed as a string, not a value)

//! Boolean data type
// returns value true or false only.
let isOver21 = true;
let isLoggedIn = false;

