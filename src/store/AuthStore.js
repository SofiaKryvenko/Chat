import { action, observable } from 'mobx'
import axios from 'axios'
//



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
  async signUp(history) {
    const { status } = await axios.post('/api/user', this.user);
    if (status === 200) {
      history.push({
        pathname:'/chat'
      })
    }
  }

}