import app from './server';
import http from 'http';
import mongo from 'mongodb'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import session from 'express-session'
//
import ChatServer from './serverChat'
import routes from './mongo/Request';


// const MongoStore = require('connect-mongo')(session);
const server = http.createServer(app);
// let currentApp = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//session
app.use(session({
  secret:process.env.RAZZLE_SESSION_SECRET,
  resave: false,
  saveUninitialized: true,  //This will ensure the sessions are saved.
  // store: new MongoStore({})
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
mongoose.connect('mongodb://chat:'
  + process.env.RAZZLE_MONGO_ATLAS_PW +
  '@chat-shard-00-00-kdylc.mongodb.net:27017,chat-shard-00-01-kdylc.mongodb.net:27017,chat-shard-00-02-kdylc.mongodb.net:27017/test?ssl=true&replicaSet=chat-shard-0&authSource=admin', (err) => {
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
