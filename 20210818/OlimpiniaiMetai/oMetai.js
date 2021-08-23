const olimpiniaiMetai = (metai) => {
  let olympicNo = 0;
  if (metai >= 1896 && metai % 4 === 0) {
    olympicNo = (metai - 1896) / 4 + 1;
    return (
      "Metai olimpiniai. Olimpiniu zaidyniu numeris <b>" + olympicNo + "<b>"
    );
  } else return "Metai nera olimpiniai";
};

module.exports = olimpiniaiMetai;
