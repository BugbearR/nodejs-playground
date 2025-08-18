class SampleTask {
    constructor(cancellationToken) {
        this.cancellationToken = cancellationToken;
        this.isProcessing = false;
    }

    async doSampleTask() {
        // 既にキャンセル済みならもう処理しない
        if (this.cancellationToken.isCancelled) {
            return;
        }

        // 二重起動防止
        if (this.isProcessing) {
            return;
        }

        // リソース確保
        try
        {
            this.isProcessing = true;

            console.log("task1");
            await SampleTask.sleep(2000);
            // 途中でキャンセルされた場合
            if (this.cancellationToken.isCancelled) {
                return;
            }

            console.log("task2");
            await SampleTask.sleep(2000);
        }
        finally {
            // 必要なら task1, task2 の後始末
            // リソース解放
            this.isProcessing = false;
        }
    }
}

export default SampleTask;
