var http = require("http");

var express = require("express");
var app = express();

var port = 8080;
var options = {
};

var server = http.createServer(options, app);

app.use(express.static("public"));

server.listen(port);
