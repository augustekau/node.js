// fs.appendFileSync("uzrasai.txt", " + data to append");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, resp) => {
  const url = req.url;
  const method = req.method;

  if (url === "/rezultatas" && method === "POST") {
    // console.log("Atliksime skaiciavima");
    const body = [];
    //event listener
    req.on("data", (dalis) => {
      body.push(dalis);
    });
    req.on("end", () => {
      let bs = Buffer.concat(body).toString();
      let x = bs.split("=")[1];
      x = x.replace(/\+/g, " ");
      fs.appendFileSync("tekstas.txt", x + "\n");
      resp.setHeader("Content-Type", "text/html");
      resp.write("<html>");
      resp.write("<head>");
      resp.write("<title>Notebook</title>");
      resp.write('<meta charset="uft-8">');
      resp.write("</head>");
      resp.write("<body>");

      resp.write('<button type="submit">Grizti</button>');
      resp.write("</body>");
      resp.write("</html>");
      return resp.end();
    });
  } else {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<html>");
    resp.write("<head>");
    resp.write("<title>Notebook</title>");
    resp.write('<meta charset="uft-8">');
    resp.write("</head>");
    resp.write("<body>");

    resp.write('<form action="rezultatas" method="post">');
    resp.write('<input type="text" name="tekstas">');
    resp.write('<button type="submit">Issaugoti</button>');
    resp.write("</form>");

    resp.write("</body>");
    resp.write("</html>");
    resp.end();
  }
});

//kad paleisti serveri turim nuroryti metoda, port,
server.listen(3001, "localhost");
