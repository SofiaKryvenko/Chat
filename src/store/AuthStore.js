import { action, observable, runInAction } from 'mobx'
import axios from 'axios'
//



export default class AuthStore {

  @observable user = {
    username: '',
    email: '',
    password: '',
  }

  @observable login_data = {
    username: '',
    password: '',
  }

  @action.bound
  handleChange(event: Event, obj) {
    this[obj][event.target.name] = event.target.value
  }


  @action.bound
  async signUp(history) {
    const { status } = await axios.post('/api/signup', this.user);
    if (status === 200) {
      runInAction( () => {
        this.user.username = '';
        this.user.email = '';
        this.user.password = '';  
      });
      history.push({
        pathname:'/chat'
      })
    }
  }

  @action.bound
  async signIn(history) {
    const { status } = await axios.post('/api/login', this.login_data);
    if (status === 200) {
      runInAction(() => {
        this.login_data.username = '';
        this.login_data.password = '';
      });
      history.push({
        pathname: '/chat'
      })
    }
  }

}