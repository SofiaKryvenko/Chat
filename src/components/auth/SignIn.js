import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter} from 'react-router-dom'

@withRouter
@inject('auth')
@observer
export default class SignIn extends Component{

  onSignIn(event: Event) {
    const { signIn } =  this.props.auth
    event.preventDefault();
    signIn();
  }

  render() {
    const { handleChange } = this.props.auth
    return (<div className='auth_main_wrapper'>
      <div className='auth_wrapper'>
        <form onSubmit={(event) => {
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
      </div></div>
    )
  }
}