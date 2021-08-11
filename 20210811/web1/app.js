const http = require("http");
// function atsakas(req, res) {}

// http.createServer(atsakas);

// anonimine funkcija
const server = http.createServer((req, resp) => {
  const url = req.url;
  const method = req.method;
  console.log("Ivyko ivykis");
  console.log(url);
  console.log(method);
  resp.setHeader("content-type", "text/html");
  resp.write("<html><head><title>Puslapis</title></head>");
  resp.write("<body>");
  resp.write("Labas pasauli");
  resp.write("</body></html>");
  resp.end();
});

server.listen(8080, "localhost");
