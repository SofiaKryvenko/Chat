import { action, observable, runInAction } from 'mobx'
import axios from 'axios'
//



export default class AuthStore {

  @observable user = {
    username: '',
    password: '',
  }

  @observable login_data = {
    username: '',
    password: '',
  }

  @observable errors={}

  @action.bound
  handleChange(event: Event, obj) {
    this[obj][event.target.name] = event.target.value
  }


  @action.bound
  async signUp(history) {
    try {
      const { status, data } = await axios.post('/api/signup', this.user);
      if (status === 200) {
        runInAction(() => {
          this.clearObjData(this.user)
        });
        history.push({
          pathname: '/chat'
        })
      } else if (status === 404) {
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }

  }

  @action.bound
  async signIn(history) {
    try {
      const { status, data,response } = await axios.post('/api/login', this.login_data);
      if (status === 200) {
        runInAction(() => {
          this.clearObjData(this.login_data)
        });
        history.push({
          pathname: '/chat'
        })
      }
      else if (status === 403) {
        console.log(response);
        console.log('error with log in');
        
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  @action.bound
  async logOut(history) {
    try {
      const { status } = await axios.get('/api/logout')
      if (status === 200) {
        history.push({
          pathname: '/signin'
        })
      }
    } catch (error) {
      console.log(error)
    } 
  }


  clearObjData(obj) {
    for (let key in obj) {
      obj[key]=''
    }
  }

}

