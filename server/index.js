const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

PORT = 4000;
app.listen(PORT, () => console.log('Server is listening on port ' + PORT + ' 🚀'))
