const dns = require("dns");
const dnsPromises = dns.promises;

const options = { all: true };

dnsPromises.lookup(process.argv[2], options).then((addrs) => {
    addrs.forEach((addr) => {
        console.log(addr)
    } );
} );
