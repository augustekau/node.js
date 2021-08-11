const chalk = require("chalk");

const isTrikampis = (a, b, c) => {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

const trikampis = (a, b, c) => {
  if (isTrikampis(a, b, c)) {
    console.log(chalk.green("Galima sudaryti trikampi"));
    if (a == b && a == c) {
      console.log(chalk.green("Lygiakrastis"));
    } else if (a == b || b == c || a == c) {
      console.log(chalk.green("Lygiasonis"));
    }
  } else {
    console.log(chalk.bgRed("Negalima sudaryti trikampio"));
  }
};

module.exports = { isTrikampis, trikampis };
