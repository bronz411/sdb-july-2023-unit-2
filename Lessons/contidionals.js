/* 
CONDITIONALS:

- We use conditionals whenever a decision needs to be made.
- These conditionals need to result in a truthy or a falsy test.
- Tools we have for decision making ar the following:

-if statements
-if else statements
-if else if statements

*/

// ? Create and if statement for the condition using a 24 hour clock if it is before 12pm console log good morning.

// ! initial setup
let currentHour = 18;

// console.log(current hour < 12);

/* 
1- keywordd of "if" that will start the if block
2- conditional - must result in a truth to apply
3- code block that will be ran if the condition is true

*/
// (1)      (2)
if (currentHour < 12) {
  // (3)
  console.log("good morning");
}

// ! If Else Statement
//? if it is less than 12 console log good morning if it is greater than 12 log good afternoon.
if (currentHour < 12) {
  console.log("good morning");
} else {
  console.log("good afternoon");
}

// ! If Else If statement
// ? If the hours are before 12a console log good morning
// ? If the hours are between 12-5 console log good afternoon
// ? If the hours are between 5-12a console log good evening
// code flows down, if it makes it past the first "if" as a no, then it must be past 12 so we don't need the  (>=12 && < 17)

if (currentHour < 12) {
  console.log("good morning");
} else if (currentHour < 17) {
  console.log("good afternoon");
} else {
  console.log("good evening");
}

//! Movie Ticket Exercise
//? You are in charge of coding out the conditional logic for charging a person based on age the ticket price.

// Toddlers 5 and under are free
//  Child price of movie ticket is $5 per ticket
// Adult price is $10
// child age is from 5-13
// Adult age is anything older than 13
// ! Bonus Challenge
// seniors 55 and older
// ticket price for seniors is $7
// ! initial setup

let age = 50;
let priceOfTicket = 0;

// ! if statements

if (age < 5) {
  priceOfTicket = 0;
} else if (age < 13) {
  priceOfTicket = 5;
} else if (age >= 55) {
  priceOfTicket = 7;
} else {
  priceOfTicket = 10;
}

console.log("That will be $" + priceOfTicket.toFixed(2) + " please.");
console.log(`$${priceOfTicket.toFixed(2)}`);
