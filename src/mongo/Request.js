// import User from './SchemaUser'
// import passport from 'passport'
// import LoginStrategy from '../config/PassportConfig'

const routes = (app,passport) => {

  //GET ALL USERS==============
  app.get('/api/user', (req, res) => {
  })

  //USE FOR LOGIN=================

  app.post('/api/login', passport.authenticate('login', {
      successRedirect: '/chat',
      failureRedirect: '/signin',
      failureFlash: true
    }),
    function (req, res) {
      res.redirect('/users/' + req.user.username);
    });
  
 //USE FOR REGISTRATION===================
  
  // app.post('/api/user', passport.authenticate('signup', {
  //   failureRedirect: '/',
  //   failureFlash: true
  // }))
  
  //LOG_OUT========================

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/signin')
   })
  
}

export default routes


// app.post('/api/login', (req, res) => {
//   const password = req.body.password;
//   const username = req.body.username;
//   User.findOne({ username: username, password: password }, (err, user) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send();
//     }
//     else if (!user) {
//       return res.status(404).send()
//     }
//     else {
//       return res.status(200).send('ok!login')
//     }
//   })
// })


// app.post('/api/user', (req, res) => {
//   console.log('req=', req.body)
//   const newUser = new User(req.body)
//   newUser.save((err, save_user) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send('problem with bd');
//     } else {
//       return res.status(200).send('ok!add new user')
//     }
//   })


// })