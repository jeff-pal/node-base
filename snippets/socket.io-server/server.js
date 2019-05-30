/*
    © 2019 Jeff Pal.  All rights reserved.
    Project: Socket.io Server
    Author: Jeff Pal
    Git repository: https://github.com/jeff-pal
    Helpfull reference: https://gist.github.com/luciopaiva/e6f60bd6e156714f0c5505c2be8e06d8
*/

const
    io = require("socket.io"),
    server = io.listen(8000);

var x, y;

// event fired every time a new client connects:
server.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);

    socket.on("disconnect", () => {
        console.info(`Client gone [id=${socket.id}]`);
    });
    
    socket.on("conversation", (msg) => {
        console.info(`Msg: ${msg}`);
        if(msg==='hi')
            socket.emit("reply", "what's up?");
        else
            socket.emit("reply", "Sorry, I'm not programmed to understand this message.");
    });
    
    socket.on("pingMsg", (msg) => {
        console.info(`Msg: ${msg}`);
        socket.emit("reply", "pong");
    });

    socket.on("getData", () => {
        x = (new Date()).getTime()
        y = Math.random();
        socket.emit("response", [x, y]);
        console.log(`Data sent: ${[x, y]}`);
    });
});