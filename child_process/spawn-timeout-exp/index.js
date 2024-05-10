const { spawn } = require('child_process');

if (process.argv.length < 3)
{
    console.log(`usage: ${process.argv[0]} ${process.argv[1]} <command> [args ...]`);
    process.exit(1);
}

function runFooExe(cmd, args, timeoutMs = 3000) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { shell: true });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      resolve({ stdout, stderr, code });
    });

    child.on('error', (err) => {
      reject(err);
    });

    const timeoutId = setTimeout(() => {
      child.kill('SIGTERM');
      reject(new Error('Timeout exceeded'));
    }, timeoutMs);

    child.on('close', () => {
      clearTimeout(timeoutId);
    });
  });
}

runFooExe(process.argv[2], process.argv.slice(3))
  .then(({ stdout, stderr, code }) => {
    console.log('Standard Output:', stdout);
    console.log('Standard Error:', stderr);
    console.log('Exit Code:', code);
  })
  .catch((err) => {
    console.error('Error:', err.message);
  });
