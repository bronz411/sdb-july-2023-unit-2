function respond(name) {
  name = name.toLowerCase();
  firstName = name.split(" ")[0];
  lastName = name.split(" ")[1];

  if (name === "darth vader") {
    console.log("Noooooo! That's impossible!");
  } else if (name === "lex luthor") {
    console.log("Be gone, you villian!!!");
  } else if (name === "bowser") {
    console.log(`Get out of here ${name}!`);
  } else {
    console.log(`Hello ${name}, you are a wonderful friend!`);
  }
}

respond("dArth vaDer");
// should print 'Noooooo! That's impossible!'
respond("lex lutHoR");
// should print 'Be gone, you villian!!!'
respond("luke skywalker");
// should print 'Hello luke skywalker, you are a wonderful friend!'
respond("BoWser");

function capitalize(name) {
  let firstLetter = name[0].toUpperCase();
  let restOfWord = name.slice(1).toLowerCase();
  fullword = firstLetter + restOfWord;
  return fullWord;
}
