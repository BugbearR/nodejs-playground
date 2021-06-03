var http = require("http");

var express = require("express");
var app = express();
var ws = require("ws")

var port = 8080;
var options = {
};

var server = http.createServer(options, app);
var wsServer = new ws.Server({
    server: server
});

app.use(express.static("public"));

wsServer.on("connection", (wsSocket, req) => {
    console.log("WebSocketServer onConnection");
    // console.log("connected WebSocket:", wsSocket);
    // console.log("req:", req);
    var remoteAddr;
    var remotePort;
    // if (req.headers["forwarded"]) {
        
    // }
    // else {
    //     if (req.headers["x-forwarded-for"]) {
    //         remoteAddr = req.headers["x-forwarded-for"].split(/\s*,\s*/)[0];
    //     }
    //     if (req.headres["x-forwarded-port"]) {
    //         remotePort = req.headres["x-forwarded-port"].split(/\s*,\s*/)[0];
    //     }
    // }
    if (!remoteAddr) {
        remoteAddr = req.connection.remoteAddress;
    }
    if (!remotePort) {
        remotePort = req.connection.remotePort;
    }
    console.log("remoteAddress:", remoteAddr);
    console.log("remotePort:", remotePort);

//    console.log("wsServer.clients:", wsServer.clients);

    // wsSocket.isAlive = true;
    wsSocket.id = `${remoteAddr}`;

    wsSocket.on("close", function() {
        console.log(`${wsSocket.id} connection is closed.`);
    });

    // wsSocket.on("pong", function () {
    //     wsSocket.isAlive = true;
    // });

    // wsSocket.on("error", function (evt) {

    // })

    wsSocket.on("message", (msgOrg) => {
        var msg = JSON.parse(msgOrg);
        switch (msg.type) {
        case "login":
            console.log(`${msg.name} login.`);
            wsSocket.name = msg.name;
            wsServer.clients.forEach(function (clientSocket) {
                try {
                    clientSocket.send(JSON.stringify({
                        type: "login",
                        name: wsSocket.name
                    }));
                }
                catch (e) {
                    console.log(e.message);
                    console.log(e.stack);
                    console.log(e);
                }
            });
            break;
        case "msg":
            wsServer.clients.forEach(function (clientSocket) {
                try {
                    clientSocket.send(JSON.stringify({
                        type: "msg",
                        name: wsSocket.name,
                        text: msg.text
                    }));
                }
                catch (e) {
                    console.log(e.message);
                    console.log(e.stack);
                    console.log(e);
                }
            });
            break;
        default:
            console.log("Unknown message type.", msgOrg);
        }
    });
});

wsServer.on("close", function () {
    console.log("WebSocket server is closed.");
//    clearInterval(heartbeatIntervalTimer);
});

server.listen(port);
