import app from './server';
import http from 'http';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import passport from 'passport'
import session from 'express-session'
//
import ChatServer from './serverChat'
import routes from './mongo/Request';



const server = http.createServer(app);
// let currentApp = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//session
app.use(session({
  secret:process.env.RAZZLE_SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
// Passport:
app.use(passport.initialize());
app.use(passport.session());

//SOCKET IO
const io = require('socket.io')(server);
const socketServer = new ChatServer();
socketServer.createConnection(io)

//MONGOOSE (MONGO_DB)
//process.env.MONGO_ATLAS_PW=chat
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://chat:' + process.env.RAZZLE_MONGO_ATLAS_PW + '@chat-kdylc.mongodb.net/test', (err) => {
  if (!err) {
    //requests for bd
    routes(app);
    server.listen(process.env.PORT || 3000, (error) => {
      if (error) {
        console.log(error)
      }
      console.log('🚀 started')
    });
  } else {
    return console.log('error with mongoDB=',err)
  }
});



// if (module.hot) {
//   console.log('✅  Server-side HMR Enabled!');

//   module.hot.accept('./server', () => {
//     console.log('🔁  HMR Reloading `./server`...');
//     server.removeListener('request', currentApp);
//     const newApp = require('./server').default;
//     server.on('request', newApp);
//     currentApp = newApp;
//   });
// }
