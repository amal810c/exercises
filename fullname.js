"use strict";

//fullName("Potter", "Harry", "James");
//fullName("Potter", "Harry");
//fullName("Harry", "Potter");
fullName("Potter", "Harry", "James", "Pottypotpot");

function fullName(lastName, firstName, middleName) {
  /*   const firstSpace = fullname.indexOf(" ");
  const lastSpace = fullname.lastIndexOf(" "); */

  /*   const firstName = fullname.substring(0, firstSpace);
  const middleName = fullname.substring(firstSpace + 1, lastSpace);
  const lastName = fullname.substring(lastSpace + 1); */

  if (middleName != null) {
    console.log(`${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`${firstName} ${lastName}`);
  }
}
