import { action, observable } from 'mobx'
import io from 'socket.io-client';



export  default class ChatStore{
 
  @observable socket = io.connect('http://localhost:3000');
  @observable list = []
  @observable error_nickname = '';
  @observable list_of_users = [];
  @observable list_of_rooms = [];
  
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
  clientDisconnection() {
    this.socket.on('user disconnect', (id) => {
      console.log('disconnection to server chatStore',id)
    }) 
 }  
  
  
 
  //send message to server





  @action.bound
  getDataFromsocket() {
   

  }

  


}