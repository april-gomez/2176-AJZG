// Import http module
var http = require('http');
var name = 'April Gomez';
// Create web server instance
var server = http
  .createServer(function (req, res) {
    // URL Request
    if (req.url == '/') {

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(
        `<html><body style="text-align:center;">
			<h1 style="color:blue;">${name}...</h1>
      Link here...
			</body></html>`
      );
      res.end();
    } else if (req.url == '/WCSERVER') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`
		<html><body style="text-align:center;">
    <h1 style="color:blue;">Your name here...</h1>
			<a href="https://www.hau.edu./ph">
      Link here...
			</a>
		</body></html>`);
      res.end();
    } else if (req.url == '/2176') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<html><body style="text-align:center;">
      <h1 style="color:blue;">Your name here...</h1>
      <a href="https://www.hau.edu./ph">
      Link here...
		</a>
		</body></html>`);
      res.end(); //end the response
    } else if (req.url == '/HAU') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<html><body style="text-align:center;">
      <h1 style="color:blue;">Your name here...</h1>
      <a href="https://www.hau.edu./ph">
		Link here...
		</a>
	</body></html>`);
      res.end(); //end the response
    } else res.end('Invalid Request!'); //end the response
  })
  .listen(3000, () => console.log('Server running on port 3000'));