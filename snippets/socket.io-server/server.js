const
    io = require("socket.io"),
    server = io.listen(8000);


// event fired every time a new client connects:
server.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);

    // when socket disconnects, remove it from the list:
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
});


// // sends each client its current sequence number
// setInterval(() => {
//     for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
//         client.emit("seq-num", sequenceNumber);
//         sequenceNumberByClient.set(client, sequenceNumber + 1);
//     }
// }, 1000);
