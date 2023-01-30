module.exports = function calcu(a, b) {
  this.a = a;
  this.b = b;
  this.sum = function calcu() {
    sum = a + b;
    return sum;
  };
  this.difference = function calcu() {
    difference = a - b;
    return difference;
  };
  this.product = function calcu() {
    product = a * b;
    return product;
  };
  this.quotient = function calcu() {
    quotient = a / b;
    return quotient;
  };
};

// use info warning blah blah
