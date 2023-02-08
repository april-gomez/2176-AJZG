var greet = require('./prelim.js');
var congratulations = require('./prelim.js');
var farewell = require('./prelim.js');
var name = new greet('April Gomez');
var nameOne = new congratulations('April Gomez');
var nameTwo = new farewell('April Gomez');

console.log(name.greeting());
console.log(nameOne.congrats());
console.log(nameTwo.farewells());
