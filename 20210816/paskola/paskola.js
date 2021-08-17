const paskola = (x, y, m) => {
  for (let i = 1; i <= m; i++) {
    x = x + (x / 100) * y;
  }
  return x.toFixed(2);
};
// toFixed palieka dvi vietas po kablelio

// console.log(paskola(100, 3, 5));

module.exports = paskola;

// ANTRAS BUDASs
// const account= (s, p, m) => {
//     let k=(p/100);
//     let save=s;
//     for (let i=1; i<=m; i++){
//         save+=save*k;
//     }
//     return save.toFixed(2);
// }
