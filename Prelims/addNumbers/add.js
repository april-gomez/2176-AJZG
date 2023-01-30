module.exports = function add(numOne, numTwo) {
  this.numOne = numOne;
  this.numTwo = numTwo;
  this.sum = function add() {
    sum = numOne + numTwo;
    return sum;
  };
};
