const kartotinis = (number1, number2) => {
  for (let i = number1; i <= number1 * number2; i++) {
    if (i % number1 == 0 && i % number2 == 0) {
      return i;
    }
  }
};

// console.log(kartotinis(10, 5));

module.exports = kartotinis;

// const kartotinis = (number1, number2) => {
//   //Find the smallest and biggest number from both the numbers
//   let lar = Math.max(number1, number2);
//   let small = Math.min(number1, number2);

//   //Loop till you find a number by adding the largest number which is divisble by the smallest number
//   let i = lar;
//   while (i % small !== 0) {
//     i += lar;
//   }

//   //return the number
//   return i;
// };
