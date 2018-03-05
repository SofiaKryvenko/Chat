import React, { Component } from 'react'
import './modal.scss'
import closeIcon from '../../assets/img/shap.svg'

export default class Modal extends Component {
  static defaultProps = {
    closeModal: () => { },
    modalHeader: '',
    outerModalClass: '',
  }
  render() {
    const { outerModalClass, closeModal, modalHeader} = this.props
    return (
      <div className="popup modalOverlay--js">
        <div className={outerModalClass}>
          <div className="popUpHeader">
            <div className="rowPopup justifyBetween">
              <div className="popupTitle text16Lato">
                <div>{modalHeader} </div>
              </div>
              <div className="popUpHeaderClose" onClick={() => closeModal()}>
                <img src={closeIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="popupBody">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}