const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
});

app.get('/', (req, res) => {
    res.send('server');
});

io.on('connection', async(socket) => {
  socket.on('sendCoords', (data) => {
  io.sockets.emit("recData", data)
  })
})

server.listen(process.env.PORT || 3000, () => {
    console.log('listening on *:3000');
})
