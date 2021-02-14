"use strict";
let myName = "Amalie";
let firstName = "Andreas";
let lastName = "Sivertsen";
sayHello(lastName, firstName);

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

//The function is called on an earlier line than it is created? --> funktionen bliver kaldt og consollen udskriver "Hello undefined"
//The function is called with a variable called myName? --> funktionen bliver kaldt med variablen og consollen udskriver "Hello Amalie"
//There is another variable called firstName outside the function? --> funktionen bliver stadig kaldet, men stadig med parametren myName
//The function is called without any parameter? --> funktionen bliver kaldet, men uden parameter, så consollen skriver "Hello undefined"
//The function is called with firstName and lastName? --> funktionen bliver kaldt men sender kun parameteren firstName med fordi det kun er der parameter der står som argument i funktionen.
//And the function is called with lastName before firstName? --> fonktionen bliver kaldt og sender kun parameteren lastName med, da det er den første parameter og der kun står et argument i funktionen
