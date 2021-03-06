import Room from './mongo/ShemaRooms'
import User from './mongo/SchemaUser'
import Message from './mongo/MessagesShema'



class ChatServer {
 
  // constructor(app) {   
  //   this.io = require('socket.io')(app);
  // }

  createConnection(io) {  

    const users = {};
    
   io.on('connection', function (socket) {
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
  
     
  //new user
  socket.on('new user', (user, callBack) => {
    if (user in users) {
      callBack(false)
    } else {
      callBack(true)
      socket.nickname = user;
      users[socket.nickname] = socket.id;
      console.log('users array=',users)
      updateUsers()
    }  
  })
  //all chatrooms
  socket.on('chatrooms', () => {})
  //users online
  socket.on('users online', () => {})
  //typing
  socket.on('typing', () => { })
  //stop typing
     socket.on('stop typing', () => { })
  
     
  //simple send message
  socket.on('send message', (data) => {
    console.log('msg dd:', data,'user',socket.nickname)
    io.emit('receive message', {
      message: data,
      user: socket.nickname,
      date: new Date(Date.now())
    });
  })
  //privat message
     socket.on('send privat message', (to,fromUser , message) => {
       console.log('to=', to, 'message=', message)
       if (to in users) {
         io.to(to).emit('to', {
           message: message,
           sender:fromUser
         });
       }
  })   
  //updating list of nicknames
  function updateUsers() {
    io.emit('nicknames', Object.keys(users));
  }
  //disconection
  //dont work on click   
  socket.on('disconnect', () => {
    console.log('you are disconnected !', socket.nickname);
    if (!socket.nickname) return;
    delete users[socket.nickname]
    io.emit('user disconnect', socket.nickname)
    updateUsers();
  })
});
  }

 }


export default ChatServer;
