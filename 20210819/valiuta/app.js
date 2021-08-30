const { exchange, currencies } = require("./exchange");
const http = require("http");
const fs = require("fs");
const path = require("path");

function generateCurrenciesSelect(ca, name) {
  //Generuojame select'ą ir jį patalpinsime į index.html
  let s = '<select class="form-control select2" name="' + name + '">';
  ca.forEach((d) => {
    s += "<option value='" + d.code + "'>" + d.name + "</option>";
  });
  s += "</select>";
  return s;
}

//Susikuriame serverį
const server = http.createServer((req, res) => {
  let url = req.url;

  if (url === "/") {
    currencies((ca) => {
      let stream = fs.readFileSync("./template/index.html", "utf-8");
      stream = stream.replace(
        "{{currInput1}}",
        generateCurrenciesSelect(ca, "from")
      );
      stream = stream.replace(
        " {{currInput2}}",
        generateCurrenciesSelect(ca, "to")
      );
      res.setHeader("Content-type", "text/html");
      res.write(stream);
      return res.end();
    });
  }

  // http://localhost:3000/rates?from=eur&to=usd

  let getData = url.split("?");
  if (getData[0] === "/rates") {
    let fromTo = getData[1].split("&");
    let curr1 = fromTo[0].split("=")[1];
    let curr2 = fromTo[1].split("=")[1];
    currencies((ca) => {
      exchange(curr1, curr2, (rates) => {
        res.setHeader("Content-Type", "text/html");

        let s = '<table class="table">';
        rates.forEach((d) => {
          s += "<tr> <td>" + d.date + "</td>  <td>" + d.value + "</td> </tr>";
        });
        s += "</table>";

        //Nuskaitome failą
        let stream = fs.readFileSync("./template/templ.html", "utf-8");
        stream = stream.replace(
          "{{currInput1}}",
          generateCurrenciesSelect(ca, "from")
        );
        stream = stream.replace(
          " {{currInput2}}",
          generateCurrenciesSelect(ca, "to")
        );
        stream = stream.replace("{{curr1}}", curr1);
        stream = stream.replace("{{curr2}}", curr2);
        stream = stream.replace("{{rates}}", s);
        const chartData = [];
        rates.forEach((d) => {
          chartData.push({
            x: d.date,
            y: d.value,
          });
        });
        stream = stream.replace("CurrencyData", JSON.stringify(chartData));
        res.write(stream);
        res.end();
      });
    });
  }
});

//Laukiame užklausų

server.listen(5000, "localhost");

// currencies((ca) => {
//   console.log(ca);
// });

// exchange("USD", "HUF", (rates) => {
//   //rates yra masyvas, forEach tai metodas, kuris iskvietines funkcija kiekvienam masyvo (rates) elementui
//   rates.forEach((d) => {
//     console.log("Date: " + d.date + " Rate: " + d.value);
//   });
// });
