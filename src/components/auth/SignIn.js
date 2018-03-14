import React, { Component } from 'react'

export default class SignIn extends Component{

  onSignIn() {
    
  }

  render() {
    return (<div className='auth_main_wrapper'>
      <div className='auth_wrapper'>
      <form>
          <div className="login_form_row">
            <input
              placeholder='Enter your email...'  
              type="text"
            /></div>
          <div className="login_form_row">
            <input
              type="text"
              placeholder='Enter your password...'
            /></div>
          <div className="login_form_row">
          <button type='submit'>Sign In</button>
        </div>
      </form>
    </div></div>)
  }
}