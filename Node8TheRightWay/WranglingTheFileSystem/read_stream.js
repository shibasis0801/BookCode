require('fs').createReadStream(process.argv[2])
    .on('data', chunk => process.stdout.write(chunk))
    .on('error', error => process.stderr.write(`ERROR: ${error.message}`))