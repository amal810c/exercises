"use strict";

/* //øvelse 1
let person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

console.log(person1.lastName);
person1.lastName = "Lind";
console.log(person1.lastName);
console.log(person1);

person1.lastName = undefined;

//ingen forskel på de to, de bliver begge undefined
console.log(person1.lastName);
console.log(person1.middleName);

//delete lastName
delete person1.lastName;
console.log(person1.lastName);
console.log(person1.); */

//delete removes the lastname, setting = undefined sets the propertie to undefined

//let vs const
/* const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

person1.age++;

console.log(person1); */

const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

const person2 = {
  firstName: "Amalie",
  age: 26,
  student: true,
};

person1 = person2;

// does not work
