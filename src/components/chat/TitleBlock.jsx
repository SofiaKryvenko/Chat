import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'


@withRouter
@inject('auth')
@observer  
export default class TitleBlock extends Component{

  onLogOut() {
    const { history } = this.props;
    const { logOut } = this.props.auth;
    logOut(history);
}
 
  render() {
    return (
      <div className='title_block-wrap'>
        <div className="title_wrap">
        <p className="title_name">Convervation name</p>  
        </div>
        <div className="log_out_wrapper" onClick={() => {
          this.onLogOut()
        }}>
          <p>Log Out</p>
        </div>  
      </div>
    )
  }
}