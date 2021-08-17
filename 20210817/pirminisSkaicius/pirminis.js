// const pirminis = (x) => {
//   if (x > 1 && x % 1 === 0 && x % x === 0) {
//     return "Skaicius yra pirminis";
//   } else {
//     return "Skaicius yra sudetinis";
//   }
// // };

function pirminis(n) {
  if (n === 1) {
    return "Skaicius yra sudetinis";
  } else if (n === 2) {
    return "Skaicius yra pirminis";
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return "Skaicius yra sudetinis";
      }
    }
    return "Skaicius yra pirminis";
  }
}

module.exports = pirminis;
