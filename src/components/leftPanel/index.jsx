import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
//scss
import './leftPanel.scss'


@inject('chat')
@observer 
export default class LeftPanel extends Component{

  componentDidMount() {
    const { list_of_users } = this.props
    
    this.props.chat.getListOfUsers();
    console.log('list_of_users=', list_of_users)
}

  render() {
    return (
      <div className='leftpanel_main_container'>
        <div className="users_online_wrapper">
         <div className="users_online_title">Users online</div>
        </div>
      </div>
    )
  }
}