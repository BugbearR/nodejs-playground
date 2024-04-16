import fs from "fs";
import { flock } from "fs-ext";

async function writeData(filePath, data) {
    return new Promise((resolve, rejects) => {
        fs.open(filePath, "a", (err, fd) => {
            if (err) {
                rejects(err);
                return;
            }
            flock(fd, "ex", (err) => {
                if (err) {
                    fs.close(fd, () => {
                        rejects(err);
                    });
                    return;
                }
                fs.write(fd, data, (err) => {
                    if (err) {
                        fs.close(fd, () => {
                            rejects(err);
                        });
                        return;
                    }
                    fs.close(fd, () => {
                        resolve();
                    });
                } );
            } );
        });
    });
}

(async () => {
    const pid = process.pid;
    for (let i = 0; i < 10000; i++) {
        await writeData("/tmp/data.txt", `${pid}: data ${i}\n`);
    }
})();
