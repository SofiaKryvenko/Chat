import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const Model = mongoose.Model;
//CREATE USER
const userSchema = new Schema({
  _id:mongoose.Types.ObjectId,
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: String,
})
const User = new Model('User', userSchema);
export default User;