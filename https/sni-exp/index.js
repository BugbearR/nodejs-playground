const https = require('https');
const fs = require('fs');
const tls = require('tls');

const options = {
  key: fs.readFileSync('certs/default/privkey.pem'),
  cert: fs.readFileSync('certs/default/cert.pem'),
  SNICallback: (domain, cb) => {
    if (domain === 'foo.example') {
      cb(null, tls.createSecureContext({
        key: fs.readFileSync('certs/foo.example/privkey.pem'),
        cert: fs.readFileSync('certs/foo.example/cert.pem')
      }));
    } else if (domain === 'bar.example') {
      cb(null, tls.createSecureContext({
        key: fs.readFileSync('certs/bar.example/privkey.pem'),
        cert: fs.readFileSync('certs/bar.example/cert.pem')
      }));
    } else {
      cb();
    }
  }
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
});

server.listen(443, () => {
  console.log('Server is running on https://localhost:443');
});
