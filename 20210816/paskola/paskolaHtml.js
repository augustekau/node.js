const paskola = require("./paskola");

const index = () => {
  let s = "<html>";
  s += "<body>";
  s += '<form method ="POST" action ="skaiciuoti">';
  s += "Suma" + '<input type="text" name ="x"> <br>';
  s += "Palukanos" + '<input type="text" name ="x"> <br>';
  s += "Metai" + '<input type="text" name ="x"> <br>';
  s += '<button type="submit"> Skaiciuoti </button>';
  s += "</form>";
  s += "</body>";
  s += "<html>";
  return s;
};

const result = (x, y, m) => {
  let s = "<html>";
  s += "<body>";
  s += "Rezultatas: " + paskola(x, y, m);
  s += "</body>";
  s += "<html>";
  return s;
};
module.exports = { index, result };
