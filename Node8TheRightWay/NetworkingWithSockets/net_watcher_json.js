'use strict';

const fs = require('fs')
const net = require('net')
const inputFile = process.argv[2]

if (!inputFile) {
    throw new Error("Supply filename as argument!")
}

net.createServer(connection => {
    console.log(`Client Connected: ${connection}`)
    connection.write(
        JSON.stringify({
            type: 'watching',
            file: inputFile
        }) + '\n'
    )
    

    const watcher = fs.watch(inputFile, () =>
        connection.write(
            JSON.stringify({
                type: 'changed',
                timestamp: Date.now()
            }) + '\n'
        )
    )

    connection.on('close', () => {
        console.log('Client Disconnected')
        watcher.close()
    })
}).listen(60300, () => console.log("Listening for subscribers"))

