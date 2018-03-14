// import passport from 'passport'
import User from '../mongo/SchemaUser'
const LocalStrategy = require('passport-local').Strategy;


const passport_config = (passport) => {
   
  // passport.use('signup', new LocalStrategy({
   
  // }
  // ));

  passport.use('login', new LocalStrategy({ passReqToCallback: true },
    function (req, username, password, done) {
      //check if username is in base
      User.findOne({username:username}, (err, user) => {
        if (err) { return done(err) }
        if (!user) {
          return done(null, false,
            { message: 'User Not found.' });
        }
        if (!user.validPassword(password, user.password)) {
          return done(null, false,{ message: 'Invalid Password' });
        }
       
        return done(null, user)
      });

    }
  ))


  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
      done(err, user);
    });
  });

 }
export default passport_config

