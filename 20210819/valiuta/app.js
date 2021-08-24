const exchange = require("./exchange");
const http = require("http");
const fs = require("fs");
const path = require("path");

//Susikuriame serverį
const server = http.createServer((req, res) => {
  let url = req.url;

  if (url === "/") {
    let stream = fs.readFileSync("./template/index.html");
    res.setHeader("Content-type", "text/html");
    res.write(stream);
    return res.end();
  }

  // http://localhost:3000/prognoze?from=eur&to=usd

  let getData = url.split("?");
  if (getData[0] === "/rates") {
    let fromTo = getData[1].split("&");
    let curr1 = fromTo[0].split("=")[1];
    let curr2 = fromTo[1].split("=")[1];

    exchange(curr1, curr2, (rates) => {
      res.setHeader("Content-Type", "text/html");

      //s - kintamajame išsaugosime sugeneruotą lentelę
      let s = '<table class="table">';
      //su kiekvienu temp masyvo elementu vykdysime žemiau pateiktą f-ką ir prie kintamojo
      //s pridesime naujas eilutes
      rates.forEach((d) => {
        s += "<tr> <td>" + d.date + "</td>  <td>" + d.value + "</td> </tr>";
      });
      s += "</table>";

      //Nuskaitome failą
      let stream = fs.readFileSync("./template/templ.html", "utf-8");
      stream = stream.replace("{{curr1}}", curr1);
      stream = stream.replace("{{curr2}}", curr2);
      stream = stream.replace("{{rates}}", s);
      res.write(stream);
      res.end();
    });
  }
});

//Laukiame užklausų
server.listen(3000, "localhost");

// exchange("USD", "HUF", (rates) => {
//   //rates yra masyvas, forEach tai metodas, kuris iskvietines funkcija kiekvienam masyvo (rates) elementui
//   rates.forEach((d) => {
//     console.log("Date: " + d.date + " Rate: " + d.value);
//   });
// });
