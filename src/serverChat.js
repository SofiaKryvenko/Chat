
class ChatServer {
 
  constructor(app) {   
    this.io = require('socket.io')(app);
  }

  createConnection() {  
    this.io.on('connection', function (socket) {
      console.log('connection to server from serverChat',socket.id)
      socket.on('send message', (data) => {
         console.log('msg dd:',data)
        //msg to me from server 
        this.io.emit('message to client', data);
        //msg to all user exept me from server
        // socket.broadcast.emit('message to client',{data})
      })

      socket.on('disconnect', () => {
        console.log('you are disconnected ! ')
      })
    });
  }

 }


export default ChatServer;
