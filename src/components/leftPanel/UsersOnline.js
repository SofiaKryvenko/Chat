import React, { Component} from 'react'
import { observer, inject } from 'mobx-react'
// import { observable, action,toJS } from 'mobx'


@inject('chat')
@observer 
export default class UsersOnline extends Component{

//   choseUserToprivat(event: Event) {
//     const { sendPrivatMessage } = this.props.chat;
//     console.log('event====', event.target.attributes.getNamedItem('data-name').value);
//     const user = event.target.attributes.getNamedItem('data-name').value;
//     sendPrivatMessage(user,'sasa','I send you a message')
// }


  render() {
    return (
      <div className="users_online_wrapper">
        <div className="users_online_title">Users</div>
        <div className="user_list_block">

        </div>
      </div>
    )
  }
}



// {
//   list_of_users.map((user, index) => {
//     return (
//       <div data-name={user} key={user + index} className='user_online' onClick={(e) => this.choseUserToprivat(e)}>{user}</div>)
//   })
// }
