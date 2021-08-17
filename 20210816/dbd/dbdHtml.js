const dbd = require("./dbd");

const index = () => {
  let s = "<html>";
  s += "<body>";
  s += '<form method ="POST" action ="skaiciuoti">';
  s += '<input type="text" name ="x"> <br>';
  s += '<input type="text" name ="x"> <br>';
  s += '<button type="submit"> Skaiciuoti </button>';
  s += "</form>";
  s += "</body>";
  s += "<html>";
  return s;
};

const result = (x, y) => {
  let s = "<html>";
  s += "<body>";
  s += "Rezultatas: " + dbd(x, y);
  s += "</body>";
  s += "<html>";
  return s;
};
module.exports = { index, result };
