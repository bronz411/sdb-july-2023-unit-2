/* 
Variables:

Variables are used to store information that we can later reference by recalling the variables name. 
Anytime you create a variable is creating a memory slot for us to reference.

Math Class Example:

x = 10

x + 5 = ?

*/

// ! Rules of naming variables

/* 
- Names can contain letters, numbers, underscores, and dollar signs.
- Names MUST begin with a letter
- Names can begin with a dollar sign or underscore (rarely used)
- Names are case sensitive (shoppingCart and shoppingcart are different)
- Reserved words can NOT be used for variables (class, let, const, var, etc.)
- When naming variables avoid single letters, be descriptive.

*/

// ! Casing of Variables

/* 
camelCase - you will lowercase the first word and then uppercase the first letter of the rest of the words.
- firstName, lastName, stateTaxOwed

PascalCasing - Every first letter of a word is capitalized.
- used mostly on Classes

SNAKE_CASE - words are all in caps and underscore added to break the words up
-used for CONSTANTS or general settings
-DEVELOPER_API_URL
*/

// ! Three ways to delcare variables [var, let, const]
// const is not changable, let can change

//prettier-ignore
let      firstName   =    "Brent"
//(1)       (2)     (3)     (4)

/* 
1) JS keyword that denotes the creation of the vaiable.
2) The name of the variable that the developer will reference in order to use the value that is stored
3) assignment operator
4) Initial Value
*/

console.log("First Name", firstName);

// ! Variables are case sensitive 

// If your code breaks the rest of the code after the break will not excecute.

// console.log("First Name", firstname);s

// console.log("Hello World");


// ! Variable Reassignment 
/* 
- You do Not need to re-initialize the variable with a let or a var
- Only the variable name follwed by the assignment operator and the value that you want to assign it to is needed.

*/

// ! Important Note: ONLY VAR and LET will allow you to reassign.

firstName = "Steve"
console.log ("First Name Changed:", firstName)


// ! Const Example:

const stateTax = .03;

// stateTax = .04; we get an error because you can not reassign a const

// ? 1) create a variable to store the last name of someone
// ? 2) reassign that variable to another last name
// ? 3) Make sure you console log as you go

let lastName = "Thompson";

console.log("Last name is:", lastName);

lastName = "Allen";

console.log("last name is now:", lastName);

//! when naming variables avoid single letters, be discriptive!!!

60*60*24

const seconds = 60;
const minutes = 60;
const hours = 24;
let totalSeconds = seconds * minutes * hours;

console.log("Total seconds in a day:", totalSeconds);