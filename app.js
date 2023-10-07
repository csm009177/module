const add = require("./mod/add.js");
const minos = require("./mod/minos.js");
const multi = require("./mod/multi.js");
const div = require("./mod/div.js");

const calc = {
  add : require("./mod/add.js"),
  minos : require("./mod/minos.js"),
  multi: require("./mod/multi.js"),
  div : require("./mod/div.js"),
}

console.log("더하기", add(1,2));
console.log("빼기", minos(1,2));
console.log("곱하기", multi(1,2));
console.log("나누기", div(1,2));

console.log("더하기", calc.add(1,2));
console.log("빼기", calc.minos(1,2));
console.log("곱하기", calc.multi(1,2));
console.log("나누기", calc.div(1,2));