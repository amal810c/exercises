"use strict";

const name = "Albus Percival Wulfric Brian Dumbledore";

const namesObject = getNameParts(name);
console.log(namesObject);

function getNameParts(fullName) {
  const firstSpace = fullName.indexOf(" ");
  const lastSpace = fullName.lastIndexOf(" ");

  let firstName = fullName.substring(0, firstSpace);
  let middleName = fullName.substring(firstSpace + 1, lastSpace);
  let lastName = fullName.substring(lastSpace + 1);
  firstName = capitalize(firstName);
  middleName = capitalize(middleName);
  lastName = capitalize(lastName);

  const nameParts = { firstName, middleName, lastName };
  return nameParts;
}

function capitalize(str) {
  const first = str.substring(0, 1).toUpperCase();
  const rest = str.substring(1).toLowerCase();
  const result = `${first}${rest}`;
  return result;
}
