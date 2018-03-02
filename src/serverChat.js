
class ChatServer {
 
  // constructor(app) {   
  //   this.io = require('socket.io')(app);
  // }

  createConnection(io) {  


    var nicknames = [];
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
  //new user
  socket.on('new user', (user, callBack) => {
    if (nicknames.indexOf(user) !== -1) {
      callBack(false)
    } else {
      callBack(true)
      socket.nickname = user;
      nicknames.push(socket.nickname)
      console.log('nicknames array=',nicknames)
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
  socket.on('stop typing',()=>{})
  //simple send message
  socket.on('send message', (data) => {
    console.log('msg dd:', data,'user',socket.nickname)
    io.emit('receive message', {
      message: data,
      user: socket.nickname
    });
  })
  //updating list of nicknames
  function updateNicknames() {
    io.emit('nicknames', nicknames);
  }
  //disconection
  socket.on('disconnect', () => {
    console.log('you are disconnected !', socket.nickname);
    if (!socket.nickname) return;
    nicknames.splice(nicknames.indexOf(socket.nickname), 1);
    updateNicknames();
  })
});
  }

 }


export default ChatServer;
