const getUserName = (name, surname) => {
  return "vardas " + name + "pavarde " + surname;
};

module.exports = getUserName;

// getUserName("Jonas", "Jonaitis");

// toks pat parasymas

// function getUserName(name, surname) {
//   return "vardas" + name + "pavarde" + surname;
// }

// galima vietoj module exports parasyti tik exports pries funkcija
// exports.getUserSurname = (name, surname) => {
//   return "vardas " + name + "pavarde " + surname;
// };

// galima paimti dvi funkcijas
// module.exports = { getUserName, getUserSurname };
