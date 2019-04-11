'use strict';

const fs = require('fs')
const { spawn } = require('child_process')

const fileName = process.argv[2]
if ( !fileName ) {
    throw new Error("Supply filename as argument!")
}

fs.watch(fileName, () => {
    const ls = spawn("ls", ['-l', '-h', fileName])
    
    let output = ''

    ls.stdout.on('data', chunk => output += chunk)

    ls.on('close', () => {
        const parts = output.split(' ')
        console.log(parts)
    })
})