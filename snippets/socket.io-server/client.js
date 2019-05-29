//CLIENT TEST

const
    io = require("socket.io-client"),
    ioClient = io.connect("http://localhost:8000");
console.info('Me: ping')
ioClient.emit("pingMsg", "hi");
ioClient.on("reply", (msg) => console.info('Server: '+msg));
