const { isTrikampis, trikampis } = require("./trikampis");

// console.log(process.argv);
// parsInt  - changes string to int
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

trikampis(a, b, c);
console.log(isTrikampis(a, b, c));
