// ! first way

function divisible(dividend, divisor) {
  let remainder = dividend % divisor;
  console.log(remainder);
  if (remainder == 0) console.log(true);
  else {
    console.log(false);
  }
}
divisible(48, 7);

// ! Second way

let divisibleFunction = (dividend, divisor) => dividend % divisor;

let attempt1 = divisibleFunction(4, 2);
console.log(attempt1);

// ! couldn't figure out ternary's
