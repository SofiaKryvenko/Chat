import React, { Component } from 'react'
// import { observer, inject } from 'mobx-react'
import HomeHeader from './HomeHeader'
import AllUser from './AllUser'
import './home.scss'
import { observer, inject } from 'mobx-react'

@inject('chat')
@observer 
export default class Home extends Component{
  componentDidMount() {
    this.props.chat.clientConnection();
    this.props.chat.getDataFromsocket();
  }
  render() {
    return (
      <div className='home_main_wrap'>
        <HomeHeader />
        <div className="home_container">
         <AllUser/>
        </div>
      </div>
     )
   }
 }