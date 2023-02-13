const { response } = require("Express");
var express = require("Express");

var app = express();

app.get("/", function(request, respons) {
    response.send("Hello World!");
})

app.listen(3000, function() {
    console.log("Server running at port 3000");
})