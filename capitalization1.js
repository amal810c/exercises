"use strict";

capitalize("aMALIE");

function capitalize(str) {
  const first = str.substring(0, 1).toUpperCase();
  const rest = str.substring(1).toLowerCase();
  console.log(`${first}${rest}`);
}
