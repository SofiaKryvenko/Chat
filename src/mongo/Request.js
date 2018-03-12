// import User from './SchemaUser'

const routes = (app) => {

  
  // app.get('/api/user', (req, res) => {
  // })

  app.post('/api/user', (req, res) => {
    console.log('req=', req.body, 'res=', res)
    res.send('ok!')
    // const newUser = new User(req.body)
  })
}

export default routes



