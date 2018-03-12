import React, { Component, Fragment } from 'react'
import { observer, inject } from 'mobx-react'


@inject('auth')
@observer
export default class SignUp extends Component {

  onSignUp(event: Event) {
    const { signUp } = this.props.auth
    event.preventDefault();
    signUp();
  }


  render() {
    const { user, handleChange } = this.props.auth
    return (
      <Fragment>
        <form onSubmit={(event) => this.onSignUp(event)}>
          <div className="login_form_row">
            <input
              required  
              name='email'
              type="email"
              value={user.email}
              onChange={(event) => {
                handleChange(event, 'user')
              }}
              placeholder='Enter your email...' />
          </div>
          <div className="login_form_row">
            <input
              required  
              name='username'
              type="text"
              value={user.username}
              onChange={(event) => {
                handleChange(event, 'user')
              }}
              placeholder='Enter your username...' />
          </div>
          <div className="login_form_row">
            <input
              required  
              name='password'
              type="password"
              value={user.password}
              onChange={(event) => {
                handleChange(event, 'user')
              }}
              placeholder='Enter your password...' />
          </div>

          <div className="login_form_row">
            <button
              type='submit'>Sign up</button>
          </div>
        </form>
        <div className="login_form_row">
          <div className='is_sign_in'>Have an account?
          <span> Log in</span>
          </div>
        </div>
      </Fragment>
    )
  }
}