const olimpiniaiMetai = (metai) => {
  if (metai >= 1896 && metai % 4 === 0) {
    return "Metai olimpiniai. 0limpiniu zaidyniu numeris";
  } else return "Metai nera olimpiniai";
};

module.exports = olimpiniaiMetai;
