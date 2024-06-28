// Import the CancellationToken class
import CancellationToken from './CancellationToken.js';

// Function to simulate an asynchronous operation
async function asyncOperation(cancellationToken) {
    return new Promise((resolve, reject) => {
        // Use setTimeout to simulate asynchronous operation
        const timeoutId = setTimeout(() => {
            if (cancellationToken.isCancelled) {
                reject(new Error('Operation was cancelled'));
            } else {
                resolve('Operation completed');
            }
        }, 1000); // Complete the operation after 1 second

        // Register a cancellation handler with the CancellationToken
        cancellationToken.register(() => {
            clearTimeout(timeoutId);
            reject(new Error('Operation was cancelled'));
        });
    });
}

// Example of using CancellationToken to cancel an asynchronous operation
async function runExample() {
    const cancellationToken = new CancellationToken();

    try {
        // Start the asynchronous operation
        const promise = asyncOperation(cancellationToken);

        // Cancel the operation for some reason
        setTimeout(() => cancellationToken.cancel(), 500); // Cancel after 0.5 seconds

        // Wait for the result of the asynchronous operation
        const result = await promise;
        console.log(result);
    } catch (error) {
        // Log the error message if the operation was cancelled or failed
        console.error(error.message);
    }
}

// Execute the example function
runExample();
