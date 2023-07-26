const { log } = require("console");
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

async function nameLength() {
  let firstName = await ask("What is your first name? ");
  let lastName = await ask("What is your last name? ");
  let nameLength = firstName.trim().length + lastName.trim().length;

  console.log(`Hello, ${firstName.trim()} ${lastName.trim()}!`);
  console.log(`your name is ${nameLength} characters long.`);
}
nameLength();
