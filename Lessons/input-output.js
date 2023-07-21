// CTRL-C will exit a node environment

const readline = require("readline");
const readlineInerface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInerface.question(questionText, resolve);
  });
}

// ! Computer Response Color
// function computerResponse(string) {
//   let white = "\033[0;39m";
//   let yellow = "\033[033m";
//   console.log(yellow + string + white);
// }

// or just install chalk
// ! End of computer response color

async function start() {
  let firstName = await ask("What is your name? ");

  console.log("Good morning ", firstName);

  //   process.exit() will eject you from the node environment at the end of the task.
}
// start();

/* 
Make a program that uses `readline` and `ask` to ask three things:
* "What is your name?"
* "What is your quest?"
* "What is your favorite color?"

After asking all three questions, the program should output:

`Hello {name}! good luck with {quest}, and here is a {color} flower for good luck

> Replace name quest and color with input values
*/

async function questStart() {
  let name = await ask("What is your name? ");
  let quest = await ask("What is your quest? ");
  let color = await ask("What is your favorite color? ");

  computerResponse(
    `Hello ${name}! Good luck with ${quest}, and here is a ${color} flower for good luck.`
  );
}

questStart();
