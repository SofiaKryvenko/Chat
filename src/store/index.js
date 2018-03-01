import ChatStore from './ChatStore'


class RootStore {
  constructor() {
    this.chat= new ChatStore()
  }
}


export default RootStore