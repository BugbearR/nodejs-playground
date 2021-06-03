(function(win, doc) {
    var mySocket;
    function onMessage(msgOrg) {
        var msg = JSON.parse(msgOrg);
        switch (msg.type) {
        case "msg":
            var output1Elm = document.getElementById("output1");
            output1Elm.value += msg.name + ":" + msg.value + "\n";
            break;
        }
    }

    function sendMessage() {
        var input1Elm = doc.getElementById("input1");
        var inputText = input1Elm.value;
        mySocket.send(JSON.stringify({
            type: "msg",
            text: inputText
        }));
        input1Elm.value = "";
    }
    function init() {
        switch (doc.location.protocol) {
        case "https:":
            wsProtocol = "wss:";
            break;
        case "http:":
            wsProtocol = "ws:";
            break;
        default:
            throw new Error("Unknown protocol.");
        }
        var wsUrl = wsProtocol + "//" + doc.location.host + "/";
        mySocket = new WebSocket(wsUrl);
        mySocket.onerror = function(event) {
            console.log("WebSocket error observed:", event);
        }

        mySocket.onclose = function() {
            console.log("WebSocket is closed now.");
        }

        mySocket.onopen = function() {
            console.log("WebSocket is opened now.");
            mySocket.send(JSON.stringify({
                type: "login",
                name: "alice"
            }));
        };

        mySocket.onmessage = onMessage;

        var sendButton = doc.getElementById("sendButton");
        sendButton.addEventListener("click", sendMessage);
    }
    win.addEventListener("DOMContentLoaded", init);
})(window, document);
