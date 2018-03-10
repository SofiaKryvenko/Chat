import React, { Component } from "react"
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
//components
import SignUp from './SignUp'
//scss
import './login.scss'


@withRouter
@inject('chat')
@observer
export default class Auth extends Component {
  render() {
    return (
      <div className='auth_main_wrapper'>
        <div className='auth_wrapper'>
          <div className="auth_title">Welcome</div>
          <SignUp />
        </div>
      </div>
    )
  }
}