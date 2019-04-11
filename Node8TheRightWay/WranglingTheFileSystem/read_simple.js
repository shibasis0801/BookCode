'use strict';

const fs = require('fs')

const fileName = process.argv[2]
if ( !fileName ) {
    throw new Error("Supply filename as argument!")
}

fs.readFile(fileName, (err, data) => {
    if (err)    throw err;
    console.log(data.toString());
})