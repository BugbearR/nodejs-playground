import CancellationToken from "./CancellationToken.js";
import SampleTask from "./SampleTask.js";

const cancellationToken = new CancellationToken();
const sampleTask = new SampleTask(cancellationToken);
let intervalId = undefined;
let isProcessing = false;

function releaseGlobalResource() {

}

function stopProc() {
    if (intervalId) {
        clearInterval(intervalId);
    }

    cancellationToken.cancel();

    if (!isProcessing) {
        releaseGlobalResource();
    }
}

process.on("SIGTERM", () => {
    console.log("SIGTERM received.");
    stopProc();
});

process.on("SIGINT", () => {
    console.log("SIGINT received.");
    stopProc();
});

// setInterval 方式。処理が遅れていても一定間隔で実行。
intervalId = setInterval(async() => {
    isProcessing = true;
    await sampleTask.doSampleTask();
    isProcessing = false;
    if (cancellationToken.isCancelled) {
        releaseGlobalResource();
    }
}, 5000);
