// // const http = require("http"); 1
// const express = require("express");

// //sias dvi eilutes (const.app ir app.listen)su expressJS galima naudoti vietoje 1 2 ir 3
// const app = express();

// app.use((req, res, next) => {
//   console.log("atejo naujas vartotojas");
//   req.socket.remoteAddress;
//   req.url;
//   next();
// });

// app.use("/users", (req, res, next) => {
//   console.log("Informacija is middleware");
//   res.send("<h1> Vartotoju sarasas </h1>");
//   next(); //next parasome tam, kad abu middleware pasileitu. be next pasileidzia tik pirmas
// });
// app.post((req, res, next) => {
//   console.log("Antrasis middleware");
//   res.send("<h1> Pagrindinis puslapis  </h1>");
// });

// app.listen(3000);

// const server = http.createServer((req, res) => {}); 2

// server.listen(5000, "localhost"); 3

///////// UZDUOTIS

const express = require("express");
const fs = require("fs");
const app = express();

app.use((req, res, next) => {
  console.log("atejo naujas vartotojas");

  let a = req.socket.remoteAddress;
  let b = req.url;
  let c = new Date().toISOString().slice(0, 10);
  fs.appendFileSync("log.txt", "IP " + a + " URL: " + b + " Date: " + c + "\n");
  next();
});

app.use("/rezultatas", (req, res, next) => {
  res.send("<h1> Rezultatu puslapis  </h1>");
});
app.use("/", (req, res, next) => {
  res.send("<h1> Pagrindinis puslapis </h1>");
  next();
});

app.listen(3000);

///////////////////////POST METODAS
