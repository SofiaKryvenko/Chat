import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable,action } from 'mobx'
//scss
import './leftPanel.scss'
//img
import new_chat from '../../assets/img/plus_msg.png'
//components
import Modal from '../modal'
import UsersOnline from './UsersOnline'

@inject('chat')
@observer 
export default class LeftPanel extends Component{

  @observable isModal = false;
  @observable roomName=''
  @action.bound
  openModal() {
    this.isModal = true;
  }
  @action.bound
  closeModal() {
    this.isModal = false;
  }

  @action.bound
  createChatRoom(event: Event) {
    console.log('this click work');
    event.preventDefault();
    this.roomName = '';
    this.closeModal();
  }

  render() {
    return (   
        <div className='leftpanel_main_container'>
          {this.isModal && (<Modal
            modalHeader='Create new conversation'
            closeModal={this.closeModal}
            outerModalClass='create_new_conversation'
          >
            <form onSubmit={this.createChatRoom}>
              <div className="modal_row">
                <input
                  className='input_bottom_border'
                  type="text"
                  placeholder='conversation name...'
                  name='roomName'
                  value={this.roomName}
                  onChange={(event) => {
                    this.roomName = event.target.value;
                  }}
                />
              </div>
              <div className="rowPopup">
                <button type='submit'>Create chat</button>
              </div>
            </form>            
          </Modal>)}     
          <UsersOnline />
        <div className="conversation_main_wrapper">
          <div className="conversation_title">All conversation</div>
          <div className="create_conversation" onClick={(event) => {
              this.openModal();
          }}>
            <img src={new_chat} alt=""/>
            Create conversation</div>
          <div className="conversation_list_block"></div>
        </div>
        </div>
 
    )
  }
}