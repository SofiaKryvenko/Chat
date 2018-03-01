import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { action, observable } from 'mobx'
//components
import Textarea from 'better-react-textarea-autosize';
import { Picker } from 'emoji-mart'

//scss
import '../../../node_modules/emoji-mart/css/emoji-mart.css'
//img
import smile from '../../assets/img/ic-tag-faces-black-24-px.svg'

@inject('chat')
@observer 
export default class SendMessage extends Component{

  @observable openEmojiiPicker = false;

  @action.bound
  togglePicker() {
    this.openEmojiiPicker = !this.openEmojiiPicker;
  }  

  componentDidMount() {
    this.input.focus();
  }

  checkEnterPressed = (event: Event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
    this.onSubmit(event)
    }
  }

  onSubmit = (event: Event) => {
    const { sendToServer } = this.props.chat;
    event.preventDefault();
    const message = this.input.value
    sendToServer(message)
    this.input.value = ''  
  }


  
  
  render() {
    return (
      <form className='input_message_wrap'> 
        <Textarea
          inputRef={(input) => { this.input = input; }}
          maxRows={6}
          placeholder='Type a message here... '
          onKeyPress={(event) => this.checkEnterPressed(event)}
        />  
        <div className="emoji_block">
          <div className='emojii_pick' onClick={this.togglePicker} >
            <img src={smile} alt=""/>
          </div>
          {this.openEmojiiPicker && (
            <Picker
              onClick={(emoji, event) => {
                this.input.value += " " + emoji.native
                }
                }
              sheetSize={20}  
              set='twitter'
            / >
          )}       
        </div>
         
      </form>
    )
  }
}
