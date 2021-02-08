"use strict";

/* const fullName = "Peter Heronimous Lind";

const firstName = fullName.substring(0, fullName.indexOf(" "));

console.log(firstName);

const middleName = fullName.split(" ")[1];

console.log(middleName);

const lastName = fullName.split(" ")[2];

console.log(lastName); */
/* 
const fullName = "Andreas Ellebæk Grøn Sivertsen";

const firstName = fullName.substring(0, fullName.indexOf(" "));

console.log(firstName);

const middleName = fullName.substring(
  fullName.indexOf(" "),
  fullName.lastIndexOf(" ")
);

console.log(middleName.trim());

const lastName = fullName.split(" ")[3];

console.log(lastName); */

const name = "Albus Percival Wulfric Brian Dumbledore";

const firstSpace = name.indexOf(" ");
const lastSpace = name.lastIndexOf(" ");

const firstName = name.substring(0, firstSpace);
const middleName = name.substring(firstSpace + 1, lastSpace);
const lastName = name.substring(lastSpace + 1);

console.log(firstName);
console.log(middleName);
console.log(lastName);
