import CancellationToken from "./CancellationToken.js";
import SampleTask from "./SampleTask.js";
import sleep from "./Sleep.js";

const cancellationToken = new CancellationToken();
const sampleTask = new SampleTask(cancellationToken);

function releaseGlobalResource() {
    // グローバルリソース解放
}

function stopProc() {
    cancellationToken.cancel();
}

process.on("SIGTERM", () => {
    console.log("SIGTERM received.");
    stopProc();
});

process.on("SIGINT", () => {
    console.log("SIGINT received.");
    stopProc();
});

(async () => {
    while (!cancellationToken.isCancelled) {
        await sampleTask.doSampleTask();
        if (cancellationToken.isCancelled) {
            break;
        }
        await sleep(1000);
    }
    releaseGlobalResource();
})();
