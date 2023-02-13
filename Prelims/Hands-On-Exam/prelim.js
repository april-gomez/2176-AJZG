var prelims = {
  myName: function (name) {
    return name;
  },

  greet: function (myName) {
    console.log('Hello, ' + myName);
  },

  congratulations: function (myName) {
    console.log('Congratulations, ' + myName);
  },

  farewell: function (myName) {
    console.log('Goodbye, ' + myName);
  },
};

module.exports = prelims;
