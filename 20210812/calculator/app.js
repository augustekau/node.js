//uzsikrovem moduli
const http = require("http");
//susikuriam servery
//funkcijoje turi buti du kintamieji.

const server = http.createServer((req, resp) => {
  const url = req.url;
  const method = req.method;

  if (url === "/rezultatas" && method === "POST") {
    console.log("Atliksime skaiciavima");
    const body = [];
    //event listener
    req.on("data", (dalis) => {
      body.push(dalis);
      console.log("Gavau dali: " + dalis);
    });
    req.on("end", () => {
      let bs = Buffer.concat(body).toString();
      console.log("Gavau visa info: " + bs);
      let x = bs.split("=")[1];
      resp.setHeader("Content-Type", "text/html");
      resp.write("<html>");
      resp.write("<head>");
      resp.write("<title>Skaiciuokle</title>");
      resp.write('<meta charset="uft-8">'); //kalba
      resp.write("</head>");
      resp.write("<body>");
      resp.write("Skaicius pakeltas kvadratu: " + x * x);
      resp.write("</body>");
      resp.write("</html>");
      return resp.end();
    });
  } else {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<html>");
    resp.write("<head>");
    resp.write("<title>Skaiciuokle</title>");
    resp.write('<meta charset="uft-8">'); //kalba
    resp.write("</head>");
    resp.write("<body>");

    resp.write('<form action="rezultatas" method="post">');
    resp.write('<input type="text" name="skaicius">');
    resp.write('<button type="submit">Kvadratu</button>');
    resp.write("</form>");

    resp.write("</body>");
    resp.write("</html>");
    resp.end();
  }
});

//kad paleisti serveri turim nuroryti metoda, port,
server.listen(3000, "localhost");
