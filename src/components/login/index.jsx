import React, { Component } from "react"
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter } from 'react-router-dom'
//components
//scss
import './login.scss'


@withRouter
@inject('chat')
@observer  
export default class Login extends Component{

  @observable nickname=''

  handleSubmit(event: Event,history) {
    const { addNewUser } = this.props.chat;
    event.preventDefault();
    addNewUser(this.nickname, history);
    this.nickname = '';
}

  render() {
    const {  error_nickname} = this.props.chat;
    const { history } = this.props;
    return (
      <div className='login_main_wrapper'> 
        <div className='login_wrapper'>
          <div className="login_title">Welcome</div>  
          <form onSubmit={(e)=>this.handleSubmit(e,history)}>
            <div className="login_form_row">
              <label htmlFor="name">Do you wanna nickname ?</label>
              <input
                type="text"
                id="name"
                name='user_name'
                placeholder="your nickname is ..."
                value={this.nickname}
                onChange={(event)=>{this.nickname=event.target.value}}
              />
            </div>
            {error_nickname && (<div className="login_form_row">
              <div className="error_nickname">{error_nickname}</div>
            </div>)} 
            
            <div className="login_form_row">
              <button type='submit'>Get Ready</button>
            </div>
          </form>          
        </div>
      </div>
    )
  }
}