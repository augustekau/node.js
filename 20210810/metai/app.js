// const { keliamieji } = require("./metai");

// keliamieji(2000);
// console.log(process.argv);
let metai = process.argv[2];

const { keliamieji, isKeliamieji } = require("./metai");
keliamieji(metai);
console.log(isKeliamieji(metai));
