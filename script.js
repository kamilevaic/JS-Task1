/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let pounds = document.getElementById("to-lb");
let grams = document.getElementById("to-g");
let oz = document.getElementById("to-oz");

const calculate = document
  .getElementById("submit-btn")
  .addEventListener("click", convert);

function convert(e) {
  e.preventDefault();
  let input = document.getElementById("search").value;
  let toLb = input * 2.2046;
  pounds.innerHTML = toLb + " lb";
  let toGrams = input * 1000;
  grams.innerHTML = toGrams + " g";
  let toOz = input * 35.274;
  oz.innerHTML = toOz + " oz";
}
