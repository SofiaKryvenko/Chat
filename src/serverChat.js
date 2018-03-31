
class ChatServer {
 
  // constructor(app) {   
  //   this.io = require('socket.io')(app);
  // }


  createConnection(io) {  


    
    io.on('connection', function (socket) {

      // const currentUser = localStorage.getItem('currentUser');
      console.log('connection to server from serverChat', socket.handshake.headers)
      console.log('connection to server from serverChat', socket.id)
  //create new chat room (conversation)
     socket.on('enter conversation', (conversation) => {
       socket.join(conversation);
       // console.log('joined ' + conversation);
     });  
  //chatRoom leave(conversation)
     socket.on('leave conversation', (conversation) => {
       socket.leave(conversation);
       // console.log('left ' + conversation);
     })
  //send message in sertain conversation   
     socket.on('new message', (conversation) => {
       io.sockets.in(conversation).emit('refresh messages', conversation);
     });
  
     
  //all chatrooms
  socket.on('chatrooms', () => {})
  //users online
  socket.on('users online', () => {}) 
  //disconection
  //dont work on click   
  socket.on('disconnect', () => {
    console.log('you are disconnected !', socket.nickname);
  })
});
  }

 }


export default ChatServer;
