const diena = (d) => {
  //funkcijai paduosime viena kintamaji (diena)
  let sdiena = d + 4;
  debugger;
  sdiena = sdiena % 7;
  debugger;
  switch (sdiena) {
    case 1:
      return "Pirmadienis";
    case 2:
      return "Antradienis";
    case 3:
      return "Treciadienis";
    case 4:
      return "Ketvirtadienis";
    case 5:
      return "Penktadienis";
    case 6:
      return "Sestadienis";
    case 0:
      return "Sekmadienis";
  }
};

module.exports = diena; //nurodome kad modulis ekportuoja viena kintamaji, kuris yra funkcija
