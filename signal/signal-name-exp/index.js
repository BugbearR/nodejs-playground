#!/bin/env node
if (process.argv.length < 3) {
    console.log(`usage: ${process.argv[0]} ${process.argv[1]} signal_name`);
    process.exit(1);
}

process.on(process.argv[2], () => {
    console.log("Signal received!");
});

setInterval(function() { console.log("tick"); }, 1000);
