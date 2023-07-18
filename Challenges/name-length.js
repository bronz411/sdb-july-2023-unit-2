/*Bronze: 
Write two variables. One of those variables will store your name. The other variable will store your breakout room buddy's name (aka: Friend!)
Find out what property you can use to check how long their name is as well as your own.
goal is to console.log how many letters each of the names are...
*/

/* SILVER

Expand on what you have already done and write a conditional to see 
who has the longer name. Using string interpolation console log who's 
name is longer. 
Example Result: My name is longer than Adam's.

*/

/* GOLD

In the console log include how many letters difference there are between 
the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that 
has not been mentioned so far. See if you can add that to your conditional!

*/

// ! setup section
let myName = "Brent";
let friendName = "zak";
let letterDiff = Math.abs(myName.length - friendName.length);

// ! conditional section

if (myName.length > friendName.length) {
  console.log(
    "My name is " + letterDiff + " characters longer than my friend's name"
  );
} else if (myName.length < friendName.length) {
  console.log(
    "My name is " + letterDiff + " characters shorter than my friend's name"
  );
} else {
  console.log("Our names are the same length");
}
