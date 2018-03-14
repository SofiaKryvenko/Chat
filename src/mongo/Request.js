// import User from './SchemaUser'
// import passport from 'passport'
// import LoginStrategy from '../config/PassportConfig'

const routes = (app,passport) => {

  //GET ALL USERS==============
  app.get('/api/user', (req, res) => {
  })

  //USE FOR LOGIN=================

  app.post('/api/login', passport.authenticate('login',
    {
      failureRedirect: '/signin',
      failureFlash: true
    }),

  );
  
 //USE FOR REGISTRATION===================
  
  app.post('/api/signup', passport.authenticate('signup', {
    failureRedirect: '/',
    failureFlash: true
  }))
  
  //LOG_OUT========================

  app.get('/api/logout', (req, res) => {
    req.logout();
   })
  
}

export default routes


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