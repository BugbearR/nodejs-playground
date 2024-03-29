// from https://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http

const http = require("http");
const fs = require("fs");
const path = require("path");

function putContentTextPlainUTF8(res, status, body) {
    const utf8Body = Buffer.from(body, "utf8");
    res.writeHead(status, {
        "Content-Length": utf8Body.length,
        "Content-Type": "text/plain; charset=UTF-8"
    });
    res.end(utf8Body);
}

// https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
function isReservedPathByWindows(s) {
    return (/^(CON|PRN|AUX|NUL|COM[0-9]|LPT[0-9])$/i).test(s);
}

function isContainsInvalidPathCharByWindows(s) {
    return /[<>:"/\\|?*]/.test(s);
}

// function escapeInvalidPathCharByWindows(s) {
//     return s.replace(/[<>:"/\\|?*]/, (c) => {
//         return "%" + c.charCodeAt(0).toString(16);
//     });
// }

function isValidPathItem(s) {
    return !isReservedPathByWindows(s) && !isContainsInvalidPathCharByWindows(s);
}

function normalizeUrlPath(pathStr) {
    const pathArr = pathStr.split("/");
    const newPathArr = [""];
    for (let i = 0; i < pathArr.length; i++) {
        const pathItem = pathArr[i];
        if (pathItem === "") {
            continue;
        }

        let pathItemDec = undefined;
        try {
            pathItemDec = decodeURIComponent(pathItem);
        }
        catch (e) {
            console.log("invalid sequence included.")
            return undefined;
        }
        // if contained separator then invalid.
        if (/[\/\\]/.test(pathItemDec)) {
            console.log("invalid separator included.")
            return undefined;
        }

        if (!isValidPathItem(pathItemDec)) {
            console.log("invalid path item included.")
            return undefined;
        }

        // XXX Do we need to process "." and ".."?
        if (pathItemDec === ".") {
            continue;
        }

        if (pathItemDec === "..") {
            newPathArr.pop();
            if (newPathArr.length === 0) {
                console.log("no parent.")
                return undefined;
            }
            continue;
        }
        newPathArr.push(pathItemDec);
    }
    if (pathStr.endsWith("/")) {
        newPathArr.push("");
    }
    return newPathArr.join("/");
}

function putContentFile(res, statusCode, filePath) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                putContentTextPlainUTF8(res, 404, "Not found.");
                return;
            }
            else {
                putContentTextPlainUTF8(res, 500, "Internal error.");
                console.log(err.code);
                console.log(err.message);
                console.log(err.stack);
                return;
            }
        }

        const extname = path.extname(filePath);
        let contentType = undefined;
        switch (extname) {
        case '.txt':
            contentType = 'text/plain; charset=UTF-8';
            break;
        case '.html':
            contentType = 'text/html; charset=UTF-8';
            break;
        case '.js':
            contentType = 'text/javascript; charset=UTF-8';
            break;
        case '.css':
            contentType = 'text/css; charset=UTF-8';
            break;
        case '.json':
            contentType = 'application/json; charset=UTF-8';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        default:
            contentType = 'application/octet-stream';
        }

        res.writeHead(statusCode, {
            "Content-Length": content.length,
            "Content-Type": contentType
        });
        res.end(content);
    });
}

const server = http.createServer()

server.on("request", async (req, res) => {
    console.log("remoteAddress:", req.socket.remoteAddress);
    console.log("remotePort:", req.socket.remotePort);
    let reqUrl = req.url;

    const queryIdx = reqUrl.indexOf("?");
    let reqPath = undefined;
    let queryString = undefined;
    if (queryIdx >= 0) {
        reqPath = reqUrl.substring(0, queryIdx);
        queryString = reqUrl.substring(queryIdx + 1);
    }
    else {
        reqPath = reqUrl;
    }

    console.log(reqPath);
    const normalPath = normalizeUrlPath("/" + reqPath);
    console.log(normalPath);
    if (normalPath === undefined) {
        putContentTextPlainUTF8(res, 400, "Invalid URL.");
        return;
    }
    let filePath = "public/" + normalPath
    if (normalPath.endsWith("/")) {
        filePath += "/index.html";
    }
    filePath = path.normalize(filePath);
    console.log(filePath);

    putContentFile(res, 200, filePath);
});

server.listen(8080);
