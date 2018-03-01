import React, { Component } from 'react'
// import emojione from 'emojione'
import { emojify } from 'react-emojione';

export default class Message extends Component{
  render() {
    const { message } = this.props;
    return (
      <div className='out_message_wrap '>
        <div className='out-message'>
         {emojify(message)}  
        </div>
      </div>
    )
  }
}