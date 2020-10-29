require('dotenv').config();

const express = require('express');
const socketio = require('socket.io');
const bodyParser = require('body-parser');

const app = express();

const todoRoutes = require('./routes/todoRouter');
const chatRoutes = require('./routes/chatRouter');


app.set('view engine', 'pug');
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.use('/todos', todoRoutes);
app.use('/chat', chatRoutes);

app.use('/', (req, res, next) => {
  res.send('<h1>Page introuvable</h1>');
})

const PORT = process.env.port | 8000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const io = socketio.listen(server);

io.on('connection', (socket) => {
  console.log('Connection established !');

  socket.on('chat', (message) => {
    console.log(`message: ${message}`);
    socket.broadcast.emit('message', message);
  });
});