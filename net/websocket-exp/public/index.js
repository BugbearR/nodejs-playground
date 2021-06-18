(function(win, doc) {
    var mySocket;
    var pendingMsgs = [];
    var isLoggedin = false;

    function sendPendingMsgs() {
        if ( pendingMsgs.length > 0 ) {
            var reqClose = false;
            pendingMsgs.forEach( function (msg) {
                if (msg.type === "close") {
                    reqClose = true;
                    return;
                }
                if (reqClose) {
                    reqClose = false;
                }
                mySocket.send(JSON.stringify(msg));
            });
            pendingMsgs.length = 0;
            if (reqClose) {
                mySocket.close();
            }
        }
    }

    function sendMsg(msgObj) {
        if (!mySocket) {
            pendingMsgs.push(msgObj);
            initWebSocket();
            return;
        }
        switch (mySocket.readyState) {
        case 0: // CONNECTING
            pendingMsgs.push(msgObj);
            return;

        case 1: // OPEN
            pendingMsgs.push(msgObj);
            sendPendingMsgs();
            return;

        case 2: // CLOSING
            pendingMsgs.push(msgObj);
            return;

        case 3: // CLOSED
            pendingMsgs.push(msgObj);
            // initWebSocket();
            return;
        }
    }

    function onLoginButton() {
        try {
            var username = document.getElementById("username").value;
            if (username.trim().length === 0) {
                alert("empty username");
                return;
            }

            sendMsg({
                type: "login",
                name: username
            });
            isLoggedin = true;

            document.getElementById("loginButton").disabled = true;
            document.getElementById("logoutButton").disabled = false;
        }
        catch (e) {

        }
    }

    function onLogoutButton() {
        if (mySocket) {
            try {
                sendMsg({
                    type: "logout"
                });
                sendMsg({
                    type: "close"
                });
            }
            catch (e) {
                console.log(e.message);
                console.log(e.stack);
                console.log(e);
            }
        }
        document.getElementById("loginButton").disabled = false;
        document.getElementById("logoutButton").disabled = true;
        // mySocket = null;
    }

    function onMessage(evt) {
        var msg = JSON.parse(evt.data);
        switch (msg.type) {
        case "login":
            var output1Elm = document.getElementById("output1");
            output1Elm.value += msg.name + ": login.\n";
            break;

        case "msg":
            var output1Elm = document.getElementById("output1");
            output1Elm.value += msg.name + ":" + msg.text + "\n";
            break;
        }
    }

    function sendMessage() {
        var input1Elm = doc.getElementById("input1");
        var inputText = input1Elm.value;
        sendMsg({
            type: "msg",
            text: inputText
        });
        input1Elm.value = "";
    }

    function initWebSocket() {
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
        try {
            mySocket = new WebSocket(wsUrl);

            mySocket.onerror = function(event) {
                console.log("WebSocket error observed:", event);
                // if (pendingMsgs.length > 0) {
                //     setTimeout(initWebSocket, 1000);
                // }
            }

            mySocket.onclose = function() {
                console.log("WebSocket is closed now.");
                if (isLoggedin && pendingMsgs.length > 0) {
                    setTimeout(initWebSocket, 1000);
                }
                mySocket = null;
            }

            mySocket.onopen = function() {
                console.log("WebSocket is opened now.");
                // reconnect
                sendPendingMsgs();
            };
            mySocket.onmessage = onMessage;
        }
        catch (e) {
            console.log(e.message);
            console.log(e.stack);
            console.log(e);
            //setTimeout(initWebSocket, 1000);
        }
    }

    function init() {
        // alert("Hello, Websocket!");
        document.getElementById("loginButton").addEventListener("click", onLoginButton);        
        document.getElementById("logoutButton").addEventListener("click", onLogoutButton);        
        document.getElementById("sendButton").addEventListener("click", sendMessage);        

        document.getElementById("logoutButton").disabled = true;
    }

    win.addEventListener("DOMContentLoaded", init);
})(window, document);
