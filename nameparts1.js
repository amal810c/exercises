"use strict";

getNameParts("Albus Percival Wulfric Brian Dumbledore");

function getNameParts(fullname) {
  //const name = "Albus Percival Wulfric Brian Dumbledore";

  const firstSpace = fullname.indexOf(" ");
  const lastSpace = fullname.lastIndexOf(" ");

  const firstName = fullname.substring(0, firstSpace);
  const middleName = fullname.substring(firstSpace + 1, lastSpace);
  const lastName = fullname.substring(lastSpace + 1);

  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}
