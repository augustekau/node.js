const fs = require("fs");
const os = require("os");
// fs.writeFileSync("tekstas.txt", "Labas pasauli");
fs.appendFileSync("tekstas.txt", " + data to append");
console.log(os.cpus());
