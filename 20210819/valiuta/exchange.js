const request = require("postman-request");

let end = new Date().toISOString().slice(0, 10);
let start = new Date();
start.setDate(start.getDate() - 10);
start = start.toISOString().slice(0, 10);
// console.log(start);
// console.log(end);

const exchange = (curr1, curr2) => {
  const url =
    "https://api.frankfurter.app/" +
    start +
    ".." +
    end +
    "?from=" +
    curr1 +
    "&to=" +
    curr2;

  request({ url: url }, (error, response) => {
    const data = response.body;
    const currency = JSON.parse(data);
    // console.log(currency.rates[1]);
    for (const [date, value] of Object.entries(currency.rates)) {
      console.log(date + " " + value.EUR);
    }
  });
};

module.exports = exchange;
