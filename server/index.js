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


// Server request to login
app.get('/auth/callback', uC.login);

// Server request to get user data to display on Navbar
app.get('/api/user-data', checkLoggedIn, c.readUser);

// Server request to get user data and title from totalMealStat
app.get('/api/user-data-title', checkLoggedIn, uC.readUserAndTitle)

function checkLoggedIn(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.json({
      username: '',
      profilePicture: '',
      userId: 0
     });
  }
}


// Server request to logout 
app.post('/api/auth/logout', uC.logout);

// Server request to create Meal Plan
app.post('/api/mealplan', uC.createMealplan);

// Server request to update totalMealStats and meals based on mealplanId
app.put('/api/put_mealplan/:mealplanId', uC.updateMealplan)

// Server request to delete totalMealStats and meals based on mealplanId
app.delete('/api/delete_mealplan/:mealplanId', uC.deleteMealplan)

// Server request to read Meal Plan by titleId from totalMealStats table
app.get('/api/mealplan/:titleId', uC.readMealplan);

// Server request to read meals based on mealplanId 
app.get('/api/meals/:mealplanId', c.readMeals);

// Server request to read totalMealStat based on mealplanId
app.get('/api/totalMealStats/:mealplanId', c.readTotalMealStat);



app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server is listening on port ' + PORT + ' 🚀'))
