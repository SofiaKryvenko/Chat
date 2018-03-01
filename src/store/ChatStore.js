import { action, observable} from 'mobx'
import io from 'socket.io-client';



export  default class ChatStore{
 
  @observable socket = io.connect('http://localhost:3000');
  @observable list = []

  @observable message = {
    text: '',
    date: null,
    user_id: null,
    chat_Id:null
  }

  @observable user = {
    user_id: null,
    user_name:''
  }
  
  @action.bound
  createRandomNickname = (len) => {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

  
 @action.bound
 clientConnection() {  
   this.socket.on('connection', () => {
     console.log('connection to server chatStore')
   })
 }
  
  @action.bound
  sendToServer(messsage) {
    
    this.socket.emit('send message', messsage)
  }

  @action.bound
  getDataFromsocket() {
    this.socket.on('receive message', (data) => {
     this.list.push(data)
    })
  }

}