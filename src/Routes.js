import React from 'react'
import { Switch, Route } from 'react-router-dom'

//components
import ChatContainer from './components/chat/index'
import Login from './components/login/index'

const Routes = () => (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/chat" component={ChatContainer}  />
  </Switch>
)

export default Routes

