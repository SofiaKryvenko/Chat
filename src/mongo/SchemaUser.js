import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/chat_base', err => {
  if (err) throw err;
  console.log('Successfully connected');
});
//CREATE USER
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password:String
})
const User = new mongoose.Model('User', userSchema);
export default User;