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
  async signUp() {
    const { response } = await axios.post('/api/user', this.user);
    console.log(response)
    // console.log('wow',this.user)
  }

}