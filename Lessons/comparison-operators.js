/* 
Comparison Operators
-When using comparison operators it will result in a true or false (boolean)
Equality operators

double equal: ==
Doesn't care about data type of the variable, only value matters
triple equal: ===
Cares about the data type and value


Not qual
Does not Equal: !=

Not Equal and Type is considered: !==

Numerical Comparison

>= Greater than or equal to
<= Less than or equal to
> Greater than
< Less than
*/



let myAge = 43;
let friendAge = "43";

// Double equal
console.log(myAge == friendAge);

//Triple equal
console.log(myAge === friendAge);

// ! string example

let helicopter1 = "       blackhawk ";
let helicopater2 = " Blackhawk      ";

console.log(helicopter1.toLowerCase().trim() === helicopater2.toLowerCase().trim());


// not equal
let friend2Age = "25";
console.log(myAge != friend2Age); 
console.log(myAge != friendAge); // False: they are equal 
console.log(myAge !== friendAge); // True: looking for same type

//! numerical comparison (greater than or less than)

let minAgeToJoinMilitary = 18;
let hankAge = 16;

console.log(hankAge >= minAgeToJoinMilitary);

let bethAge = 24;

console.log(bethAge >= minAgeToJoinMilitary);

// ! AND and OR operators

let person1 = "developer";
let person2 = "admin";
let person3 = "guest";

console.log(
    "They can view the secret page:",
     person1 == "developer" || person1 == "admin"
     ); //True, person 1 is a developer

// If a number is even and divisible by 10

let num1 = 50

console.log(num1 % 2 ===0 && num1 % 10 ===0);