//UZDUOTIS du daugybos lentele
const http = require("http");
const server = http.createServer((req, resp) => {
  const url = req.url;
  const method = req.method;
  console.log("Ivyko ivykis");
  console.log(url);
  console.log(method);
  resp.setHeader("content-type", "text/html");
  resp.write("<html><head><title>Daugyba</title>");
  resp.write("<style >");
  resp.write(
    "td {width:30px; height:30px; text-align:center; background-color:#eee;}"
  );
  resp.write("td.red {background-color:#f99;}");
  resp.write("</style>");
  resp.write("</head>");
  resp.write("<body>");
  resp.write("<h1>Daugybos lentele</h1>");
  resp.write("<table border='1'>");

  for (let x = 1; x <= 10; x++) {
    resp.write("<tr>");
    for (let i = 1; i <= 10; i++) {
      if (i == 1 || x == 1 || x == i) {
        resp.write("<td class = 'red'>" + i * x + "</td>");
      } else {
        resp.write("<td>" + i * x + "</td>");
      }
    }
    resp.write("<tr>");
  }
  resp.write("</table>");
  resp.write("</body></html>");
  resp.end();
});

server.listen(8082, "localhost");
