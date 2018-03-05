import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'


@inject('chat')
@observer  
export default class TitleBlock extends Component{
 
  render() {
    const { clientDisconnection } = this.props.chat;
    return (
      <div className='title_block-wrap'>
        <div className="title_wrap">
        <p className="title_name">Convervation name</p>  
        </div>
        <div className="log_out_wrapper" onClick={(event) =>
          {console.log('click to disconnect work')
          clientDisconnection()}}>
          <p>Log Out</p>
        </div>  
      </div>
    )
  }
}