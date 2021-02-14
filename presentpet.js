"use strict";

let name = "Amalie";
let animal = "cat";
let catname = "Figi";

presentPet(catname, name, animal);

function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}
//The function is called with variables named the same as the parameters? --> funktionen bliver kaldt med de tre parametre og consollen skriver "My name is Amalie, I have a cat called Figi"
//The function is called with variables named something different? --> funktionen bliver kaldt med de tre parametre og consollen skriver "My name is Amalie, I have a cat called Figi" også selv om parametrene og variablerne ikke hedder det samme, det er kun placeringen/rækkefølgen der er vigtig.
//The function is called with strings? --> funktionen bliver kaldt og bytter de tre argumenter i funktionen ud med de tre strings der står som parametre i funktionskaldet, så consollen skriver "My name is amalie, I have a cat called figi"
//The function is called with a mix of strings and variables? --> funktionen bliver kaldt og skifter argumenterne i funktionen ud med de strings og variabler der står i funktionskaldet og consollen udskriver "My name is amalie, I have a cat called figi"
//The function is called with variables, but in a different order? --> funktionen kaldes med de parametre der sendes med i den givne rækkefølge så presentPet(catname, name, animal); skriver i consollen "My name is Figi, I have a Amalie called cat"
