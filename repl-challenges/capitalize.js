function capitalize(someWord) {
  let firstLetter = someWord[0].toUpperCase();
  let restOfWord = someWord.slice(1).toLowerCase();
  let fullWord = firstLetter + restOfWord;
  return fullWord;
}

console.log(capitalize("tomato")); // should print 'Tomato'
console.log(capitalize("BACON")); // should print 'Bacon'
console.log(capitalize("LeTTuCe")); // should print 'Lettuce'
console.log(capitalize("mayonnAISE")); // should print 'Mayonnaise'
