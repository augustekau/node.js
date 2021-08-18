const http = require("http"); //Prisidedame HTTP moduli
const fs = require("fs"); //Prisidedame FS moduli
const path = require("path");
const olimpiniaiMetai = require("./oMetai");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  let file = "./public" + url;
  if (fs.existsSync(file) && fs.lstatSync(file).isFile()) {
    let stream = fs.readFileSync(file); //Nuskaitome failo turinį į kintamąjį stream
    const ext = path.parse(file).ext; //paimama failo galune
    if (ext == "css") res.setHeader("Content-Type", "text/css");
    if (ext == ".jpeg") res.setHeader("Content-Type", "image/jpeg");
    res.write(stream); //Išvedėme vartotojui failą
    return res.end(); //Uždarome persiuntima ir nutraukiame f-ją
  }

  if (method === "POST" && url === "/metai") {
    let data = []; // Į masyvą dėsime atsiųstus formos duomenis
    req.on("data", (chunk) => {
      data.push(chunk); // Į masyvą įdedame atskiras atsiustas dalis
    });
    req.on("end", () => {
      const d = Buffer.concat(data).toString(); //Paimame visus atsiustus duomenis
      //metai = 2020
      const m = parseInt(d.split("=")[1]); //Iš atsiųstų duomenų pasiimame metus
      const o = olimpiniaiMetai(m);
      let stream = fs.readFileSync("./template/index.html", "utf-8"); //Nuskaitome failo turinį į kintamąjį stream
      stream = stream.replace("{{result}}", o);
      res.setHeader("Content-Type", "text/html"); //Nusiuntėme headerį
      res.write(stream); //Išvedėme vartotojui failą
      return res.end(); //Uždarome persiuntima ir nutraukiame f-ją
    });
  } else {
    let stream = fs.readFileSync("./template/index.html", "utf-8"); //Nuskaitome failo turinį į kintamąjį stream
    stream = stream.replace(
      "{{result}}",
      "Įveskite metus ir paspauskite skaičiuoti"
    );
    res.setHeader("Content-Type", "text/html"); //Nusiuntėme headerį
    res.write(stream); //Išvedėme vartotojui failą
    return res.end(); //Uždarome persiuntima ir nutraukiame f-ją
  }
});

server.listen(3000, "localhost");
