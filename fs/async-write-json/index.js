const fs = require("fs");

async function main()
{
    if (process.argv.length < 3)
    {
        console.log(`usage: ${process.argv[0]} ${process.argv[1]} filePath`);
        process.exit(1);
    }

    const filePath = process.argv[2];

    const jsonObj = { "hello": "world" };

    // see https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_fspromises_writefile_file_data_options
    await fs.promises.writeFile(filePath, JSON.stringify(jsonObj));
}

(async () => {
    console.log("start");
    await main();
    console.log("end");
})();
