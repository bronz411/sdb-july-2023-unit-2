/* 
LOOPS

- They offer a quick and easy way to do something repeatedly
- There are several types of loops:

- For Loops
- While Loops
- Do while loops

 */

// ! DANGER: there is a danger in being stuck in an infinite loop

//  For Loop
/* 
1. sets the variable before the loop starts
2. defines the condition of the loop to run (ex: it's going to continue until `i` reaches 10)
3. Increases the value of i each time the code block is executed in the loop
*/

//       1)        2)     3)
// for (let i = 0; i <= 10; i++) {
// loopable datablock inside the curly boi
//   console.log(i);
// }

// let city = "Houston";
// console.log(city[0]);

// for (let i = 0; i < city.length; i++) {
//   console.log(city[i]);
// }

// ? Create a for loop that starts at 1 gotes to 100 and console logs (i)
// how can I tell if it is even or odd?
// convert even or odd statement to a truth or false statement

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//! WHILE LOOPS

/* 
This will loop through the code block as long as the condition is true
*/

let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// ? Create a while loop that will loop through 1 to 30 and add up the total

i = 1;
let total = 0;

while (i <= 30) {
  // same as total = total + i
  total += i;
  i++;
}
console.log(total);



