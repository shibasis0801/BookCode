'use strict';

const fs = require('fs')
const { spawn } = require('child_process')

const fileName = process.argv[2]
if ( !fileName ) {
    throw new Error("Supply filename as argument!")
}

fs.watch(fileName, (event, filename) => {
    // console.log(event) -> change
    // console.log(filename) -> filename
    
    const ls = spawn('ls', ['-l', '-h', fileName])
    ls.stdout.pipe(process.stdout)
})

console.log(`Watching ${fileName} for changes`)