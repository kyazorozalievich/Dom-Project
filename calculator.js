const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const division = document.querySelector(".division");
const multiply = document.querySelector(".multiply");
const answer = document.querySelector(".answer");
const equal = document.querySelector(".equal");
const input = document.querySelector(".input");
const clear = document.querySelector(".clear");

// let sum = [];

clear.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

one.addEventListener("click", () => {
  input.value += 1;
});

two.addEventListener("click", () => {
  input.value += 2;
});

three.addEventListener("click", () => {
  input.value += 3;
});

four.addEventListener("click", () => {
  input.value += 4;
});
five.addEventListener("click", () => {
  input.value += 5;
});

six.addEventListener("click", () => {
  input.value += 6;
});

seven.addEventListener("click", () => {
  input.value += 7;
});

eight.addEventListener("click", () => {
  input.value += 8;
});

nine.addEventListener("click", () => {
  input.value += 9;
});

zero.addEventListener("click", () => {
  input.value += 0;
});

plus.addEventListener("click", () => {
  input.value += "+";
  input.value.slice(-1) === "+"
    ? input.value === "+" || "-" || "/" || "*"
    : (input.value += "+");
});

division.addEventListener("click", () => {
  input.value += "/";
});

multiply.addEventListener("click", () => {
  input.value += "*";
});

minus.addEventListener("click", () => {
  input.value += "-";
});

equal.addEventListener("click", () => {
  let result = eval(input.value);
  input.value = result;
});
