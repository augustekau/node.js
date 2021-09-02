///////// UZDUOTIS 1 dalis

// const express = require("express");
// const fs = require("fs");
// const app = express();

// app.use((req, res, next) => {
//   console.log("atejo naujas vartotojas");

//   let a = req.socket.remoteAddress;
//   let b = req.url;
//   let c = new Date().toISOString().slice(0, 10);
//   fs.appendFileSync("log.txt", "IP " + a + " URL: " + b + " Date: " + c + "\n");
//   next();
// });

// app.use("/rezultatas", (req, res, next) => {
//   res.send("<h1> Rezultatu puslapis  </h1>");
// });
// app.use("/", (req, res, next) => {
//   res.send("<h1> Pagrindinis puslapis </h1>");
//   next();
// });

// app.listen(3000);

//////////UZDUOTIS 2 dalis

// const express = require("express");
// const fs = require("fs");
// const app = express();
// const kartotinis = require("./kartotinis");

// app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log("atejo naujas vartotojas");
//   let a = req.socket.remoteAddress;
//   let b = req.url;
//   let c = new Date().toISOString().slice(0, 10);
//   fs.appendFileSync("log.txt", "IP " + a + " URL: " + b + " Date: " + c + "\n");
//   next();
// });

// app.post("/rezultatas", (req, res, next) => {
//   res.send(
//     "<h1> Rezultatu puslapis  </h1><br> Maziausias bendras kartotinis " +
//       kartotinis(req.body.number1, req.body.number2)
//   );
// });

// app.get("/rezultatas", (req, res, next) => {
//   res.redirect("/");
// });

// app.get("/", (req, res, next) => {
//   res.send(
//     "<h1>Pagrindinis puslapis</h1><br><form action='/rezultatas' method='POST'><input type='number' name='number1'><br><input type='number' name='number2'><button type='submit'>Issiusti</button></form>"
//   );
// });

// app.listen(3000);

///////////////////////////
/////UZDUOTIS 3 dalis

const express = require("express");
const path = require("path");
const hbs = require("hbs");

const logRouter = require("./routes/log");
const pageRouter = require("./routes/page");

const viewsPath = path.join(__dirname, "views", "templates");
const partialsPath = path.join(__dirname, "views", "partials");

const app = express();

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logRouter);
app.use(pageRouter);

app.listen(3000);
