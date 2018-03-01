import app from './server';
import http from 'http';
// import ChatServer from './serverChat'

const server = http.createServer(app);
let currentApp = app;
const io = require('socket.io')(server);

io.on('connection', function (socket) {

  console.log('connection to server from serverChat', socket.id)
  //chatRoom join
  socket.join('join to room', (chatroom) => {
    io.emit('join to room',chatroom)
  })
  //chatRoom leave
  socket.leave('leave room', (chatroom) => {
    io.emit('leave room',chatroom)
  })
  //all chatrooms
  socket.on('chatrooms', () => {})
  //users online
  socket.on('users online', () => {})
  //typing
  socket.on('typing', () => { })
  //stop typing
  socket.on('stop typing',()=>{})
  //simple send message
  socket.on('send message', (data) => {
    console.log('msg dd:', data)
    io.emit('receive message', data);
  })
  //disconection
  socket.on('disconnect', () => {
    console.log('you are disconnected ! ')
  })
});


// const socketServer= new ChatServer(server);
// socketServer.createConnection()

server.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(error)
  }
  
  console.log('🚀 started')
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
