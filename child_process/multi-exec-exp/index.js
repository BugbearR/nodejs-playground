const childProcess = require("child_process");

function execAsync( cmdLine ) {
    return new Promise( ( resolve, reject ) => {
        childProcess.exec( cmdLine, ( err, stdout, stderr ) => {
            if ( err ) {
                reject( { error: err, stdout: stdout, stderr: stderr } );
                return;
            }

            resolve( { stdout: stdout, stderr: stderr } );
        } );
    } );
}

async function main()
{
    const callPromises = [];
    callPromises.push( execAsync( "./dummy_exe.sh 1 0" ) );
    callPromises.push( execAsync( "./dummy_exe.sh 5 1" ) );
    callPromises.push( execAsync( "./dummy_exe.sh 4 0" ) );
    callPromises.push( execAsync( "./dummy_exe.sh 3 1" ) );
    callPromises.push( execAsync( "./dummy_exe.sh 2 0" ) );
    const result = await Promise.allSettled(callPromises);
    console.log(callPromises);
    console.log(result);
}

(async () => {
    console.log("start");
    await main();
    console.log("end");
})();
