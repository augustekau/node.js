const http = require("http");
const fs = require("fs");
const plotas = require("./plotas");

//Sukuriamas http serveris
//Sukuriant turime paduoti f-ją kuri bus iškviečiama tuomet kai prašys užkrauti puslapį
//Funkcija turi turėti du parametrus:
// req - duomenys, kintamieji POST, GET ;
// res - objektas kuris bus išsiustas vartotojui
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (method === "POST" && url === "/skaiciuoti") {
    const body = [];
    //Kai POST būdu atsiunčiamas duomenų dalis, mes ją dedamies į body masyvą
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    //Kai biagiasi visų duomenų siuntimas iškviečiamas end įvykis
    req.on("end", () => {
      //Visus atsiųstus duomenis sujungiame į string
      let d = Buffer.concat(body).toString();
      //x=5&y=8
      let v = d.split("&"); // Perskeliam string per puse ties & [x=5, y=8]
      let plotis = parseFloat(v[0].split("=")[1]); //x=5   =>  [x, 5]
      let ilgis = parseFloat(v[1].split("=")[1]); //y=8   =>  [y, 8]
      let p = plotas(plotis, ilgis);
      //Nuskaitom failą result.html į kintamąjį data
      let data = fs.readFileSync("result.html", "utf-8");
      //Pakeičiame data kintamajame teksta {{rezultatas}} į kintamajį p
      data = data.replace("{{rezultatas}}", p);
      //Nustatome headerį
      res.setHeader("Content-Type", "text/html");
      //Išvedame data į naršyklę
      res.write(data);
      return res.end();
    });
  } else {
    let data = fs.readFileSync("index.html", "utf-8");
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
  }
});

server.listen(4002, "localhost");
