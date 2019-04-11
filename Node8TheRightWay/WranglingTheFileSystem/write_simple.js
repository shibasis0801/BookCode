  'use strict';

const fs = require('fs')

const inputFile  = process.argv[2]

if ( ! inputFile ) {
    throw new Error("Supply filename as argument!")
}

fs.writeFile(inputFile, "Hello World\n", (err) => {
    if (err) throw err;
    console.log('File Saved !')
})