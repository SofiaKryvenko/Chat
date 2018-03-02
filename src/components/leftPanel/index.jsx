import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
//scss
import './leftPanel.scss'


@inject('chat')
@observer 
export default class LeftPanel extends Component{


  render() {
    const { list_of_users}=this.props.chat
    return (
      <div className='leftpanel_main_container'>
        <div className="users_online_wrapper">
          <div className="users_online_title">Users online</div>
          <div className="user_list_block">
            {
              list_of_users.map((user, index) => {
                return <div key={user+index} className='user_online'>{user}</div> 
             }) 
           }
          </div>  
        </div>
      </div>
    )
  }
}