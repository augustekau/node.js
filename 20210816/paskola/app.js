const http = require("http");
const paskolaHtml = require("./paskolaHtml");

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
      console.log(d);
      const v = d.split("&");
      const x = parseInt(v[0].split("=")[1]);
      const y = parseInt(v[1].split("=")[1]);
      const m = parseInt(v[2].split("=")[1]);
      res.setHeader("Content-Type", "text/html");
      res.write(paskolaHtml.result(x, y, m));
      return res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(paskolaHtml.index());
    res.end();
  }
});

server.listen(4001, "localhost");
