// module.exports = function calcu(a, b) {
//   var totalWorkHours = 4 * 6;
//   var tax = 0.1;
//   var SSS = 1200;
//   var pagibigFund = 300;
//   var philHealth = 400;
//   const rate = 300;
//   var gross = totalWorkHours * rate;

//   console.log('The gross income is ' + gross);
//   console.log('Tax: ' + gross * tax);
//   console.log('SSS: ' + SSS);
//   console.log('Pag-ibig Fund: ' + pagibigFund);
//   console.log('philHealth: ' + philHealth);
//   console.log(
//     'Total Deductions: ' + (gross * tax + SSS + pagibigFund + philHealth)
//   );
//   console.log(
//     'The net salary is: ' +
//       (gross - (gross * tax + SSS + pagibigFund + philHealth))
//   );
// };

module.exports = function calcu(a, b) {
  this.a = 4;
  this.b = 6;
  const rate = 300;

  console.log('The gross income is ' + a * b * rate);
  console.log('Tax: ' + a * b * rate * 0.1);
  console.log('SSS: 1200');
  console.log('Pag-ibig Fund: 300');
  console.log('philHealth: 400');
  console.log('Total Deductions: ' + (a * b * rate * 0.1 + 1200 + 300 + 400));
  console.log(
    'The net salary is: ' +
      (a * b * rate - (a * b * rate * 0.1 + 1200 + 300 + 400))
  );

  return a, b, rate;
};
