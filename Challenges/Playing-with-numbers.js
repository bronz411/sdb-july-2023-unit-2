/*
Try the following in `index.js`:

- Add two numbers together with the `+` operator
- Multiply two numbers with the `*` operator
- Divide two numbers using the `/` operator
- Square a number by raising it to the power of `2**2`
- Create some complex mathematical expressions using a combination of different operators and numerical values.

Add you code below
*/
// adding example
console.log(35+65)
// multiplication example
console.log(5*20)
// division example
console.log(200/2)
// exponents example
console.log(10**2)
// Complicated math example
console.log(((30-2)+4)*5-60)

// Bonus section
//example of limiting decimal places to nth place
let decimalTest = .1+.2
console.log(decimalTest.toFixed(3))
// maximum "safe" numerals
console.log(2**53)
console.log(2**53+1)
console.log(Infinity - Infinity)
// NaN = not a number

// Final Question

// 1) math in JavaScript functions very much like math normally. Written out it follows syntax and PEMDAS structure.


// ! random number generation ruleset
// function randomNum(min, max) {
//     let range = max - min + 1;
//     console.log("Function ran");
//     return Math.floor(Math.random() * range) + min;
//   }