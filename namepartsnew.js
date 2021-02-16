"use strict";

function fullName(lastName, firstName, middleName) {
  let result = "";
  result = `${firstName} ${middleName ? middleName : ""} ${lastName}`;
  return result;
}

const fullNameString = fullName("Sivertsen", "Andreas", "Ellebæk");
console.log(fullNameString);

/* const name = "Albus Percival Wulfric Brian Dumbledore";

const firstSpace = name.indexOf(" ");
const lastSpace = name.lastIndexOf(" ");

const firstName = name.substring(0, firstSpace);
const middleName = name.substring(firstSpace + 1, lastSpace);
const lastName = name.substring(lastSpace + 1);

console.log(firstName);
console.log(middleName);
console.log(lastName); */
