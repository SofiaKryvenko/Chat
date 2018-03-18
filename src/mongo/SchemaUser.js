import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
//CREATE USER MODEL IN DB
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});


//hashing a password before saving it to the database
userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

// checking if password is valid(use for login)
userSchema.methods.validPassword = (password,hash) => {
  const a = bcrypt.compareSync(password,hash)
  console.log('thisHash=', hash, 'password', password,'compare=',a )
  return bcrypt.compareSync(password,hash);
};


const User = mongoose.model('User', userSchema);
export default User;