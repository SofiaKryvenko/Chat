import ChatStore from './ChatStore'
import AuthStore from './AuthStore'


class RootStore {
  constructor() {
    this.chat = new ChatStore();
    this.auth = new AuthStore();
  }
}


export default RootStore