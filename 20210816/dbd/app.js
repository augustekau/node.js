// console.log(dbd(12, 18));

const http = require("http");
const dbdHtml = require("./dbdHtml");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/skaiciuoti" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const d = Buffer.concat(body).toString();
      //   console.log(d);
      const v = d.split("&");
      const x = parseInt(v[0].split("=")[1]);
      const y = parseInt(v[1].split("=")[1]);
      res.setHeader("Content-Type", "text/html");
      res.write(dbdHtml.result(x, y));
      return res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(dbdHtml.index());
    res.end();
  }
});

server.listen(4000, "localhost");
