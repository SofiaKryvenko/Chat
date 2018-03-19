import mongoose from 'mongoose'
//CREATE MESSAGE MODEL IN DB
const Schema = mongoose.Schema;

const MessageShema = new Schema({
  conversationId: Schema.Types.ObjectId,
  message: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})
const Message = mongoose.model("Message", MessageShema)
export default Message;