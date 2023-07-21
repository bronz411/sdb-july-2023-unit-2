/* 
SCOPE:

Scope is how a computer keeps track of all the variables in a program.

Scope can be nested in block scopes or global scope.
initialized variables in a block that are also global, will affect that block only

*/

// ! example 1

let x = 12; // this is considered a global scope

function scope() {
  let x = 33; // this is considered a block scope
  console.log("func scope", x);
}
scope();
console.log(x);

// ! example 2

let y = 12; // this is considered a global scope

function scope2() {
  y = 33; // this is considered a block scope
  console.log("func scope2", x);
}
scope2();
console.log(y);

//! example 3

let z = 12;

function scope3() {
  let z = 45;
  if (true == true) {
    let z = 15;
    console.log("if Z", z);
  }
  console.log("scope3 z", z);
}
scope3();

console.log(z);
