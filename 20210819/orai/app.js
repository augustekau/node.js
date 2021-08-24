const forecast = require("./prognoze");
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

  let getData = url.split("?");
  if (getData[0] === "/prognoze") {
    let place = getData[1].split("=")[1];

    forecast(place, (temp) => {
      res.setHeader("Content-Type", "text/html");

      //s - kintamajame išsaugosime sugeneruotą lentelę
      let s = '<table class="table">';
      //su kiekvienu temp masyvo elementu vykdysime žemiau pateiktą f-ką ir prie kintamojo
      //s pridesime naujas eilutes
      temp.forEach((d) => {
        s +=
          "<tr> <td>" + d.date + "</td>  <td>" + d.temperature + "</td> </tr>";
      });
      s += "</table>";

      //Nuskaitome failą
      let stream = fs.readFileSync("./template/templ.html", "utf-8");
      stream = stream.replace("{{place}}", place);
      stream = stream.replace("{{temperature}}", s);
      res.write(stream);
      res.end();
    });
  }
});

//Laukiame užklausų
server.listen(3000, "localhost");

/*
forecast('klaipeda', (temp)=>{
    console.log("Temperaturos prognozės: ");
    temp.forEach((d)=>{
        console.log("Diena: "+d.date+"\t Temperatura: "+d.temperature);
    });
});
*/
