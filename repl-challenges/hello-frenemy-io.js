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

let enemyList = ["darth vader", "voldemort", "palatine", "lex luthor"];

async function respond() {
  let name = await ask("What is your name? ");
  name = name.toLowerCase();
  if (name == "darth vader") {
    console.log("Noooooo! That's impossible!");
  } else if (enemyList.includes(name)) {
    console.log("Go away", name);
  } else {
    console.log("Oh hey " + name + " it's so good to see you!");
  }
}
respond();
