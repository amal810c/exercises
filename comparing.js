"use strict";

/* const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = student1;

if (student1 == student2) {
  console.log("They are the same!");
} else {
  console.log("They are not...");
} */

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

if (student1 == student2) {
  console.log("They are the same!");
} else {
  console.log("They are not...");
}
// they are not the same

//student1.firstName = "Potty";

console.log(student1);
console.log(student2);
//the first name in student1 changes the name to Potty
