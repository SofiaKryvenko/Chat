import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import { action, observable } from 'mobx'

@inject('chat')
@observer
export default class AllUsers extends Component{

  componentWillMount() {
    const { getAllUsers } = this.props.chat;
    if (typeof window !== 'undefined') getAllUsers();
}

  render() {
    return (
      <div className='all_user_wrapper'>
        <div className="search_wrapper">
          <div className="search_container">
            <div className="search_by_name_wrap">
              <div className="search_by_name_title">Find your friend:</div>
              <div className="inputWrap">
                <input
                  className="input_styled"    
                  type="text"
                  placeholder="name of your friend is..."
                />
                <button className="button">Find</button>
              </div>
            </div>
            <div className="search_by_city_wrap">
              <div className="search_by_city_title">Your friend live in:</div>
              <div className="inputWrap">
                <input
                  className="input_styled"    
                  type="text"
                  placeholder="your friend is from..."
                />
                <button className="button">Find</button>
              </div>
            </div>
          </div>
        </div>
        <div className="all_user_container">
          <div className="user_wrap">
            <div className="user_container">
              <div className="user_name">NAME</div>
              <div className="user_city">CITY</div>
            </div>              
          </div>  
        </div>
      </div>
    )
  }
}