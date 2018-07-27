const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const uC = require('./controller/user_controller');
const c = require('./controller/controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false, 
  resave: false
}));

app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING).then(database => {
  app.set('db', database);
}).catch(error => {
  console.log('Error with Massive', error)
})



app.get('/auth/callback', uC.login);
app.get('/api/user-data', checkLoggedIn, c.getUser);

function checkLoggedIn(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}

app.post('/api/auth/logout', uC.logout);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

PORT = 4000;
app.listen(PORT, () => console.log('Server is listening on port ' + PORT + ' 🚀'))
