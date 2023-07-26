console.log("cheese" + 42);
// results in the string "cheese" and the intiger 42 : result (cheese42)
console.log("4" + 2);
// results in the string "4" and the intiger 2 :result (42)

// any data type added together becomes a string type.

console.log("pie" + true);
// This results in a string because any data type added together becomes a string : result pietrue

let boolianNumberTest = true + 8;
console.log(typeof boolianNumberTest); // result: number
console.log(boolianNumberTest); // result: 9

// this becomes a number, false changes to the numerical value of 0 and true changes to a numerical value of 1

// strings added to a boolean become strings, see pie true example above

console.log(null + 7); // result : 7 meaning null has a value of 0

console.log(undefined + 7); // result : NaN (not a number) math cannot be performed like this

console.log(null + "cat"); // result : nullcat
console.log(undefined + "cat"); // result : undefinedcat
// these values turn into data type string, and combine.

console.log(55 - "twenty"); // result: NaN
// cannot subtract a string from a number

console.log(55 - true); // result: 54 (true value is 1)
console.log(55 - false); // result: 55 (true value is 0)

console.log("split" / "brain"); // result: NaN
console.log("split" % "brain"); // result: NaN
console.log("split" * true); // result: NaN
console.log(true + true); // result: 2 (converted to integer 1+1)
console.log("split" * "brain" + null); // result: NaN
// I think it's safe to say you cannot use arithmetic operators with string values at all. + is the only one that works, and only because it dictates how to combine the separate strings.
