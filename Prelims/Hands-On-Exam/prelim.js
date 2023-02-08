module.exports = function greet(name) {
  this.name = name;
  this.greeting = function greet() {
    return 'Congratulations, ' + this.name;
  };
};

module.exports = function congratulations(nameOne) {
  this.nameOne = nameOne;
  this.congrats = function congratulations() {
    return 'Congratulations, ' + this.nameOne;
  };
};

module.exports = function farewell(nameTwo) {
  this.nameTwo = nameTwo;
  this.farewells = function farewell() {
    return 'Goodbye, ' + this.nameTwo;
  };
};
