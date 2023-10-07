const add = require("./module/add.js");
const minos = require("./module/minos.js");
const multi = require("./module/multi.js");
const div = require("./module/div.js");

const calc = {
  add : require("./module/add.js"),
  minos : require("./module/minos.js"),
  multi: require("./module/multi.js"),
  div : require("./module/div.js"),
}

console.log("더하기", add(1,2));
console.log("빼기", minos(1,2));
console.log("곱하기", multi(1,2));
console.log("나누기", div(1,2));

console.log("더하기", calc.add(1,2));
console.log("빼기", calc.minos(1,2));
console.log("곱하기", calc.multi(1,2));
console.log("나누기", calc.div(1,2));