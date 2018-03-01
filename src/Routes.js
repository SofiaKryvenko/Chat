import React from 'react'
import { Switch, Route } from 'react-router-dom'

//components
import ChatContainer from '../src/components/chat/index'


const Routes = () => (
  <Switch>
    <Route path="/" component={ChatContainer} exact/>
  </Switch>
)

export default Routes

