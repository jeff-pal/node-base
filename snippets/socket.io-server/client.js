/* 
    © 2019 Jeff Pal.  All rights reserved.
    Project: Socket.io Server
    Author: Jeff Pal
    Git repository: https://github.com/jeff-pal
    Helpfull reference: https://gist.github.com/luciopaiva/e6f60bd6e156714f0c5505c2be8e06d8
 */

const
    io = require("socket.io-client"),
    ioClient = io.connect("http://localhost:8000");
console.info('Me: ping')
ioClient.emit("pingMsg", "hi");
ioClient.on("reply", (msg) => console.info('Server: '+msg));
