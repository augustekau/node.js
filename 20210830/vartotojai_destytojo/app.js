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

///////////////////////POST METODAS

const express = require("express");
const systemRouter = require("./routes/system");
const pageRouter = require("./routes/page");
const userRouter = require("./routes/user");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }));
//middle ware kuris paduos statinius failus jei tokiu ras nurodytam kataloge
app.use(express.static(path.join(__dirname, "public")));
app.use(systemRouter);
app.use(pageRouter);
app.use("/user", userRouter);

app.listen(3000);
