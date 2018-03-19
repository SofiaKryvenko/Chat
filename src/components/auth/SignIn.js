import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter, Link } from 'react-router-dom'
//img 


@withRouter
@inject('auth')
@observer
export default class SignIn extends Component{
  onSignIn(event: Event) {
    const { signIn } = this.props.auth
    const { history } = this.props
    event.preventDefault();
    signIn(history);
  }

  render() {
    const { handleChange } = this.props.auth
    return (<div className='auth_main_wrapper'>
      <div className='auth_wrapper'>
        <div className="auth_title">LOG IN</div>  
        <form
          className='auth_form'  
          onSubmit={(event) => {
          this.onSignIn(event)
        }}>
          <div className="login_form_row">
            <input
              placeholder='Enter your username...'  
              type="text"
              name='username'
              onChange={(event) => {
                handleChange(event, 'login_data')
              }}
            />
          </div>
          <div className="login_form_row">
            <input
              type="text"
              placeholder='Enter your password...'
              name='password'
              onChange={(event) => {
                handleChange(event, 'login_data')
              }}
            />
          </div>
          <div className="login_form_row">
          <button type='submit'>Sign In</button>
        </div>
        </form>
        <div className="login_form_row">
          <div className='is_sign_in'>Need an account?
            <Link to='/'>
              <span> Sign Up</span>
            </Link>
          </div>
        </div>  
      </div>
    </div>
    )
  }
}