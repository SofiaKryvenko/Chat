import User from './SchemaUser'

const routes = (app) => {

  //GET ALL USERS
  app.get('/api/user', (req, res) => {
  })
  //USE FOR LOGIN
  app.post('/api/login', (req, res) => {
    const password = req.body.password;
    const username = req.body.username;
    User.findOne({ username: username, password: password }, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      else if (!user) {
        return res.status(404).send()
      }
      else {
       return res.status(200).send('ok!login')
      }
    })
  })
  
 //USE FOR REGISTRATION
  app.post('/api/user', (req, res) => {
    console.log('req=', req.body)
    const newUser = new User(req.body)
    newUser.save((err, save_user) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send('ok!add new user')
      }
    })
    
    
  })
  //LOG_OUT
  app.get('/api/logout',(req,res)=>{})
}

export default routes



