let lengthTest = "All dogs are good dogs";
console.log(lengthTest.length);
console.log(lengthTest[2]);
// this means spaces are included in the length property
"titanic".toUpperCase();
// uppercases all letters in string
"QUIETLY".toLowerCase();
// lowercases all letters in string
"Java".repeat(10);
// repeats string (X) number  of times
"berry".charAt(1);
// defines character at (x) position (remember string counting starts at 0)
"berry".charAt(0);
// defines character at (x) position (remember string counting starts at 0)
"banana".includes("nan");
//returns a boolean value of if (condition) is met (in this case within the string) for the string.
"banana".endsWith("ana");
//returns a boolean value of if (condition) is met (in this case at the end of the string) for the string.
"blueberry".replace("blue", "black");
//modifies the string to replace (x, y) x with y

// Flavors of quotes questions
// question 1) the single quotes inside double quotes come out verbatem, same with double.
// question 2) the strings add like normal.
// question 3) we run into an unexpected identifier (syntax error)
let quoteTest = "javascript " + "is fun " + "sometimes";

console.log(quoteTest);

let mathTest = `Two plus two is ${2 + 2}`;

console.log(mathTest);

let fruit = "   banAna";

console.log(fruit.toLowerCase().includes("ana"));

let actualPin = "5991";

let codeTypedIn = "45646815991546464";

console.log("Can you enter the house:", codeTypedIn.includes(actualPin));
