const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const server = require('http').Server(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(3002, () => {
  console.log('Listening on *:3002');
});

io.on('connection', (socket) => {
  console.log('A client connected');

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });

  socket.on('action', (message) => {
    const action = JSON.parse(message);
    action.broadcast = false;
    socket.broadcast.emit('action', JSON.stringify(action));
  })
})
