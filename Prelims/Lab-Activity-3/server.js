var http = require('http'); // 1 - Import node.js core module
var name = 'April Gomez';
var server = http.createServer(function (req, res) {
  // create web server

  if (req.url == '/') {
    // check the URL of the current request

    // set response content
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // set response content
    res.write(
      '<html><body><h1>Welcome to my Node.js Application.</h1><br><h6>Welcome ${name}. This is an activity about basics of Node.js</h6></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is the About Page.</h1><br><h6>Hello ${name}. This activity will teach on how to deal with a simple server and local modules in Node.js.</h6></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is the Contact Page.</h1><br><h6>${name}, if you want additional details about this activity go to this site: <a href = "https://www.tutorialsteacher.com/nodejs/nodejs-tutorials"> CLICK HERE </a></h6></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>This is the Gallery Page.</h1></body></html>');
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000); // 3 - listen for any incoming requests
console.log('Your server is running on 5000...');

// Gomez, April Joyce Z.
// January 30, 2022
// WCSERVER-2176
