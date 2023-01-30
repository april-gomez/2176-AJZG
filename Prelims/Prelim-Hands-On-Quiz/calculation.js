module.exports = function calcu(a, b) {
  var totalWorkHours = 4 * 6;
  var tax = 0.1;
  var SSS = 1200;
  var pagibigFund = 300;
  var philHealth = 400;
  const rate = 300;
  var gross = totalWorkHours * rate;

  console.log('The gross income is ' + gross);
  console.log('Tax: ' + gross * tax);
  console.log('SSS: ' + SSS);
  console.log('Pag-ibig Fund: ' + pagibigFund);
  console.log('philHealth: ' + philHealth);
  console.log(
    'Total Deductions: ' + (gross * tax + SSS + pagibigFund + philHealth)
  );
  console.log(
    'The net salary is: ' +
      (gross - (gross * tax + SSS + pagibigFund + philHealth))
  );
};
