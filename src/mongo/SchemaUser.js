
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/chat_base', err => {
  if (err) throw err;
  console.log('Successfully connected');
});
const Schema = mongoose.Schema;
const Model = mongoose.Model;
//CREATE USER
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: String
})
const User = new Model('User', userSchema);
export default User;