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

  request({ url: url }, (error, response) => {
    const data = response.body;
    const currency = JSON.parse(data);
    const rates = [];
    // console.log(currency.rates[1]);
    for (const [date, value] of Object.entries(currency.rates)) {
      rates.push({ date: date, value: value[curr2] });
    }
    callback(rates);
  });
};

module.exports = exchange;
