module.exports = function greet(nameOne, nameTwo) {
  this.nameOne = nameOne;
  this.nameTwo = nameTwo;
  this.greeting = function greet() {
    return 'Hello ' + this.nameOne + ' and ' + this.nameTwo;
  };
};
