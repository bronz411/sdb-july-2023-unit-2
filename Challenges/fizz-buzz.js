/*
FIZZBUZZ LOOP CHALLENGE 
************
- write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - prints out the number if none of the above are true.
- create a loop that counts to 100.
- Pass each iteration through a conditional.
*/
//  try to do it in a for loop, then a while loop, then bonus is a switch loop

// ! for loop
// for (i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// ! While loop
// let i = 1;

// while (i <= 100) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// ! using switch

for (i = 1; i <= 100; i++) {
  switch (true) {
    case i % 3 == 0 && i % 5 == 0:
      console.log("Fizz Buzz");
      break;
    case i % 3 == 0:
      console.log("Fizz");
      break;
    case i % 5 == 0:
      console.log("Buzz");
      break;
    default:
      console.log(i);
  }
}
