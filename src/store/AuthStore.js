import { action, observable } from 'mobx'
//
import User from '../mongo/SchemaUser'


export default class AuthStore {

  @observable user = {
    username: '',
    email: '',
    password: ''
  }

  @action.bound
  handleChange(event: Event, obj) {
    this[obj][event.target.name] = event.target.value
  }


  @action.bound
  signUp() {

  }

}