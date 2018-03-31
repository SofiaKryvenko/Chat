import React, { Component } from 'react'
import { observer,inject } from 'mobx-react'
import { action, observable } from 'mobx'
import { Link, withRouter } from 'react-router-dom'
import notification from '../../assets/img/globe-01-256.png'

@withRouter 
  @inject('auth')  
@observer
export default class HomeHeader extends Component{
 
  @observable showNotification = false;

  @action
  toggleNotification() {
    this.showNotification = !this.showNotification;
  }  

  render() {
    const { logOut } = this.props.auth
    const {history}=this.props
    return (
      <div className="home_header">
        <div className="home_header_inner">
          <div>
            <div className="header_title">
              <Link to='/home'>Chattio</Link>
              </div>
          </div>
          <div className='home_header-right'>
            <div className="notification_img">
              <img src={notification} alt="" onClick={()=>this.toggleNotification()}/>
              {this.showNotification && <div className="notification_block">
                <div className="notification_title">Notification</div>
              </div>}        
            </div>
            <div className="member_header" onClick={() => {
              logOut(history)
            }}>Log OUT</div>
          </div>

        </div>

      </div> 
    )
  }
}