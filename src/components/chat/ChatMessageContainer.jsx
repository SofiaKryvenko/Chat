import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Message from "./Message"
import SendMessage from './SendMessage'

@inject('chat') 
@observer  
export default class ChatMessageContainer extends Component{
 
  componentDidUpdate() {
    this.scrollToBottom('message_block')
  }

  scrollToBottom(id) {
    const block = document.getElementById(id);
    block.scrollTop = block.scrollHeight - block.clientHeight;
  }

  render() {
    const { list } = this.props.chat
    console.log('list',list)
      return (
        <div className='chat_message_block'>
          <div className="message_container" id='message_block'>
            {list.map((message, index) => <Message key={index} message={message} />)}           
          </div>  
          <SendMessage />
        </div>
      )
    }   
  }