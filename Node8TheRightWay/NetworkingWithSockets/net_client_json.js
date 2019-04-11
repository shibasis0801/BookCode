'use strict'

const net = require('net')
const client = net.connect({port : 60300})
client.on('data', data => {
    const message = JSON.parse(data);
    
    switch(message.type) {
        case "watching": 
            console.log(`Watching ${message.file} for changes`)
            break;
        case "changed":
            console.log(`File changed at ${new Date(message.timestamp)}`)
            break;
        default:
            console.error(`Unknown message type: ${message.type}`)
    }

})