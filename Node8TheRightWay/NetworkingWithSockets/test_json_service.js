'use strict';

const server = require('net').createServer(connection => {

    console.log("Subscriber connected");

    const firstChunk = '{"type":"watching", ';
    const secondChunk= '"file" : "target"}\n';

    connection.write(firstChunk);

    const timer = setTimeout(() => {
        connection.write(secondChunk);
        connection.end();
    }, 100);

    connection.on('end', () => {
        // Removing clear timeout causes error. Dont understand this part.
        clearTimeout(timer);
        console.log("Disconnected");
    })

})

server.listen(60300, function() {
    console.log("Test Server waiting for clients")
})