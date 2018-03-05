
class ChatServer {
 
  // constructor(app) {   
  //   this.io = require('socket.io')(app);
  // }

  createConnection(io) {  

    const users = {};

   io.on('connection', function (socket) {

  console.log('connection to server from serverChat', socket.id)
  //create new chat room
    socket.on('create room', room => {
    console.log('create room=',room)
    socket.join(room)
  })   
 
  //chatRoom leave
  
  
     
  //new user
  socket.on('new user', (user, callBack) => {
    if (user in users) {
      callBack(false)
    } else {
      callBack(true)
      socket.nickname = user;
      users[socket.nickname] = socket;

      console.log('users array=',users)
      updateNicknames()
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
     socket.on('send privat message', (to, fromUser, message) => {
       console.log('to=', to, 'fromUser', fromUser, 'message=', message)
       io.to().emit('privat messag',message)
  })   
  //updating list of nicknames
  function updateNicknames() {
    io.emit('nicknames',Object.keys(users));
  }
  //disconection
  //dont work on click   
  socket.on('disconnect', () => {
    console.log('you are disconnected !', socket.nickname);
    if (!socket.nickname) return;
    delete users[socket.nickname]
    io.emit('user disconnect', socket.nickname)
    updateNicknames();
  })
});
  }

 }


export default ChatServer;
