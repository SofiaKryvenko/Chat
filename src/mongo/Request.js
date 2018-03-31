import User from './SchemaUser'

const routes = (app) => {


  //======== GET ALL USERS==============
  app.get('/api/userss', (req, res, next) => {
    console.log('WORKKKKKKKKKKK')
    User.find({}, (err, user) => {
      res.json(user)
      console.log(user, 'USER!!!!!')
    })
  });
  //USE FOR LOGIN=================

  app.post('/api/login', (req, res,next) => {
    const { username, password } = req.body;
    console.log('USER=',username,'pas=',password)
    User.findOne({ username: username }, (err, user) => {
      if (err) return res.status(404).send(err);
      if (user) {
        if (user.validPassword(password, user.password)) {
          req.session.user = user._id;
          // console.log('sss=', req.session)
          return res.status(200).send(user)
        } else {
          return res.status(403).send({password:'Incorrect password'})
        }
      } else {
        return res.status(403).send({common:'Please sign up.'})
      } 
    })
 
  });
  
  //USE FOR REGISTRATION===================
  
  app.post('/api/signup', (req, res,next) => {
    const { username, password,city } = req.body;
    User.findOne({ username: username }, (err, user) => {
      if (err) return res.status(404).send(err);
      if (user) {
        if (user.validPassword(password, user.password)) {
          req.session.user = user._id;  
          console.log('sss=',req.session)
          return res.status(200).send('its login str')
        } else {
          return res.status(403).send({ password: 'Incorrect password' })
        }
      } else {
        const newUser = new User({ username, password,city })
        newUser.save((err, save_user) => {
          if (err) {
            return res.status(404).send(err);
          } else {
            return res.status(200).send('ok!add new user')
          }
        })
      }
    })
   
  })
  
    //LOG_OUT========================

  app.get('/api/logout', (req, res, next) => {
    console.log('req.session.user=', req.session.user)
    if (req.session) {
      req.session.destroy((err) => {
        if (err) return next(err);
      })
    }   
  })

 

  
}  

export default routes
