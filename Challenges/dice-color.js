// Challenge:
// Write a JavaScript code that simulates rolling a six-sided dice and assigns a corresponding color based on the dice roll. The color assignments are as follows:

// - If the dice roll is 1, assign the color "Red".
// - If the dice roll is 2, assign the color "Green".
// - If the dice roll is 3, assign the color "Blue".
// - If the dice roll is 4, assign the color "Yellow".
// - If the dice roll is 5, assign the color "Purple".
// - If the dice roll is 6, assign the color "Orange".

// ! Method 1
/* let diceResult = Math.floor(Math.random() * 6) + 1;
let diceColor = null;

if (diceResult == 1) {
  diceColor = "Red";
} else if (diceResult == 2) {
  diceColor = "Green";
} else if (diceResult == 3) {
  diceColor = "Blue";
} else if (diceResult == 4) {
  diceColor = "Yellow";
} else if (diceResult == 5) {
  diceColor = "Purple";
} else {
  diceColor = "Orange";
}
console.log(diceColor);
 */

// ! method 2

let diceRoll = Math.floor(Math.random() * 6) + 1;
let color = null;

switch (diceRoll) {
  case 1:
    color = "red";
    break;
  case 2:
    color = "green";
    break;
  case 3:
    color = "blue";
    break;
  case 4:
    color = "yellow";
    break;
  case 5:
    color = "purple";
    break;
  default:
    color = "orange";
}
console.log(color);
