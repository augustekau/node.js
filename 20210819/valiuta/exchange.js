const request = require("postman-request");

const exchange = (curr1, curr2, callback) => {
  let end = new Date().toISOString().slice(0, 10);
  let start = new Date();
  start.setDate(start.getDate() - 10);
  start = start.toISOString().slice(0, 10);
  // console.log(start);
  // console.log(end);

  const url =
    "https://api.frankfurter.app/" +
    start +
    ".." +
    end +
    "?from=" +
    curr1 +
    "&to=" +
    curr2;

  // request({ url: url }, (error, response) => {
  //   const data = response.body;
  //   const currency = JSON.parse(data);
  //   const rates = [];
  //   // console.log(currency.rates[1]);
  //   for (const [date, value] of Object.entries(currency.rates)) {
  //     rates.push({ date: date, value: value[curr2] });
  //   }
  //   callback(rates);

  request({ url: url }, (error, response) => {
    const currency = JSON.parse(response.body);
    const rates = [];
    for (const [date, value] of Object.entries(currency.rates).reverse()) {
      rates.push({
        date: date,
        value: value[curr2],
      });
    }
    callback(rates);
  });
};
//Funkciją kuri iš API per callback funkciją gražins vietovių sąrašą
const currencies = (callback) => {
  //API url'as
  const url = "https://api.frankfurter.app/currencies";
  //Kreipiamies į API URL ir paduodame callback funkciją kuri vykdoma gavus atsakymą
  request({ url: url }, (error, response) => {
    //Į data kintamajį pasitalpiname atsakymo JSON stringą
    const data = response.body;
    //JSON stringą pakeičiame į objektą
    const curr = JSON.parse(data);
    // console.log(curr);
    const ca = [];
    for (const [code, name] of Object.entries(curr)) {
      ca.push({
        code: code,
        name: name,
      });
    }
    callback(ca);
    // console.log(ca);
  });
};

module.exports = { exchange, currencies };
