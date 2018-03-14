import React from 'react'
import { Switch, Route } from 'react-router-dom'

//components
import ChatContainer from './components/chat/index'
import Auth from './components/auth/index'
import SignIn from './components/auth/SignIn'

const Routes = () => (
  <Switch>
    <Route path="/" component={Auth} exact />
    <Route path="/signin" component={SignIn} />
    <Route path="/chat" component={ChatContainer} />
  </Switch>
)

export default Routes

