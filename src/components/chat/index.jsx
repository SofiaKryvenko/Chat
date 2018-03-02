import React,{ Component} from 'react'
import { observer, inject } from 'mobx-react'
//components
import ChatMessageContainer from './ChatMessageContainer'
import TitleBlock from './TitleBlock'
import LeftPanel from '../leftPanel'


@inject('chat')
@observer  
export default class ChatContainer extends Component{


  componentDidMount() {
    this.props.chat.clientConnection();
    this.props.chat.getDataFromsocket();
  }

  
  render() {
    return (
      <div className='chat_main_container-wrapper'> 
      <LeftPanel/>  
        <div className="chat_message_block_wrap">
          <TitleBlock/>
          <ChatMessageContainer />
        </div>  
       
      </div>  
    )
  }
}
