var http = require("http");
var fs = require("fs");

var hostname = "172.26.13.225";
var port = 80;

var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    //res.setHeader("Content-Type", "text/plain");
    //res.end("Hello " + JSON.stringify(req.headers) + "\n");
    //res.end("Hello " + req.headers['user-agent'] + "\n");
    fs.readFile("static/index.html", function(err, data) {
        res.write(data);
	res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(hostname);
    console.log("Server running on port " + port);
});
