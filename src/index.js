import app from './server';
import http from 'http';
import ChatServer from './serverChat'
import mongoose from 'mongoose'


const server = http.createServer(app);
let currentApp = app;

//SOCKET IO
const io = require('socket.io')(server);
const socketServer = new ChatServer();
socketServer.createConnection(io)

//MONGOOSE (MONGO_DB)
//process.env.MONGO_ATLAS_PW=chat
mongoose.connect('mongodb+srv://chat:' + process.env.RAZZLE_MONGO_ATLAS_PW + '@chat-kdylc.mongodb.net/test');




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
