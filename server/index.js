const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

PORT = 4000;
app.listen(PORT, () => console.log('Server is listening on port ' + PORT + ' 🚀'))
