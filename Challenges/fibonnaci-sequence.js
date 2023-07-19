// for (let i = 0; i >= 55; i + i) {
//   if ((i = 0)) {
//     i++;
//     console.log(i);
//   } else {
//     console.log(i);
//   }
// }

let previousNumber = 0;
let currentNumber = 1;
let newNumber = 0;
function fibonacci() {
  while (newNumber < 55) {
    newNumber = previousNumber + currentNumber;
    console.log(newNumber);
    previousNumber = currentNumber;
    currentNumber = newNumber;
  }
}

fibonacci();
