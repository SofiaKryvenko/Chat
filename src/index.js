import app from './server';
import http from 'http';
// import promisify from 'util'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import sio from 'express-socket.io-session'
//
import ChatServer from './serverChat'
import routes from './mongo/Request'

const server = http.createServer(app);
const io = require('socket.io')(server);
const MongoStore = require('connect-mongo')(session);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

const sessions = session({
    secret: 'secret',
      resave: true,
      saveUninitialized: true, //This will ensure the sessions are saved.
      store: new MongoStore({
        mongooseConnection: mongoose.connection
      })
    }
)
app.use(sessions)
io.use(sio(sessions));

const serverChat = new ChatServer();
serverChat.createConnection(io)


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sofa:280297ck@ds223019.mlab.com:23019/chatbase')
mongoose.connection.on('error', (err) => {
  console.log('connection error:', err.message);
});
mongoose.connection.once('open', () => {
  console.log("Connected to DB!");
  
  routes(app)
  server.listen(process.env.PORT || 3000, (error) => {
    if (error) {
      console.log(error)
    }
    console.log('🚀 started')
  });
});





