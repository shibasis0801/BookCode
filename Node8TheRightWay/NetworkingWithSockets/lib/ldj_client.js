'use strict';
const { EventEmitter } = require('events'); 

class LDJClient extends EventEmitter {
    constructor(stream) {
        super();
        let buffer = '';
        stream.on('data', data => {

            buffer += data;
            let boundary = buffer.indexOf('\n');
            
            while (boundary !== -1) {
            
                let message = buffer.substring(0, boundary);
                this.emit('message', JSON.parse(message));
                
                buffer = buffer.substring(boundary + 1);
                boundary = buffer.indexOf('\n');
            }

        })        
    }
    static connect(stream) {
        return new LDJClient(stream);
    }
}

module.exports = LDJClient;