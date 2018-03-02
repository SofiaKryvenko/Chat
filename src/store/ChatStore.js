import { action, observable } from 'mobx'
import uuid from 'uuid/v4'
import io from 'socket.io-client';



export  default class ChatStore{
 
  @observable socket = io.connect('http://localhost:3000');
  @observable list = []

  @observable message = {
    text: '',
    date: this.getDate(new Date(Date.now())),
    sender:'',
    user_id: uuid(),
  }

  @observable user = {
    user_id: uuid(),
    user_name:''
  }

  @observable chat = {
    name: "conversation_general",
    messsages: [],
    users: [],
    chat_id: uuid(),
    typing_users:[]
  }

  @observable error_nickname = '';
  @observable list_of_users = [];
  
  @action.bound
  handleChange(event: Event,obj) {
    this[obj][event.target.name]=event.target.value
    }  

  getDate(date) {
    return `${date.getHours()}:${('0'+date.getMinutes()).slice(-2)}`
  }
  


  
 @action.bound
 clientConnection() {  
   this.socket.on('connection', () => {
     console.log('connection to server chatStore')
   })
 }
  
  @action.bound
  addNewUser(nickname,history) {
    this.socket.emit('new user', nickname, data => {
      if (data) {
        history.push({
          pathname: '/chat',
       })
      } else {
        this.error_nickname='That username is already taken !'
     }
   }) 
  }  
 
  
  @action.bound
  sendToServer(messsage) {  
    this.socket.emit('send message', messsage)
  }

  @action.bound
  getDataFromsocket() {
    //get messages
    this.socket.on('receive message', (data) => {
      this.list.push(data);
    })
    //get list of nicknames
    this.socket.on('nicknames', (data) => {
      this.list_of_users = [];
      console.log('list names', data)
      for (let i = 0; i < data.length; i++)
        this.list_of_users.push(data[i]);
    })
  }

}