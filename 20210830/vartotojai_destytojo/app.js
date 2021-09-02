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
const path = require("path");
const hbs = require("hbs");

////////////////ROUTES
const systemRouter = require("./routes/system");
const pageRouter = require("./routes/page");
const userRouter = require("./routes/user");

//configuruojame, kad paimtu nbs failus is templated folderio (kad nereiketu tikslaus kelio nurodyti use/page js failuose. komentaras user.js (11))
const viewsPath = path.join(__dirname, "views", "templates");
const partialsPath = path.join(__dirname, "views", "partials");

const app = express();

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Užregistruojame Body-parser middleware kuris sutvarko atsiųstus duomenis
app.use(express.urlencoded({ extended: false }));
//Registruojame express.static middleware kuris pagal užklausas atsiųs failus iš katalogo,
//kurį mes padavėme kaip kintamajį middleware sukūrimo f-jai
app.use(express.static(path.join(__dirname, "public")));
app.use(systemRouter);
app.use("/user", userRouter);
app.use(pageRouter);

app.listen(3000);
