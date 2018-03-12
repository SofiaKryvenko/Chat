import mongoose from 'mongoose'

//CREATE USER MODEL IN DB
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);
export default User;