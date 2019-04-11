'use strict';

const netClient = require('net').connect({port : 60300});
const ldjClient = require('./lib/ldj_client').connect(netClient);

ldjClient.on('message', message => {
    switch(message.type) {
        case "watching":
            console.log(`Watching ${message.file} for changes\n`);
            break;
        case "changed":
            console.log(`File changed at ${new Date(message.timestamp)}\n`);
            break;
        default:
            console.error(`Unknown message type ${message.type}\n`);
    }
});

