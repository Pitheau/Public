//1 1. import all dependencies
const express = require('express')
const cors  = require("cors");
const app = express()

// 1.5 config mongoose after you connect to db command / untill needed to avoid errors
require('./config/mongoose.config');
// after mongoose.config done un command / above line and should get db confirmation in terminal
//workflow;  after db confirmation go to model.js

// 2 config express  NEEDS to be before the routes
app.use(cors())
app.use(express.json());
app.use(express.urlencouded({ extended : true }));

// 3. run the routes command / until needed to avoid errors
// require('./routes/jobs.routes')(app)

//4 run express server
app.listen(8000, () => console.log('Listening on port: 8000'));

//run server in terminal using nodemon server.js
// terminal should have the 'Listening on port: 8000' message

//workflow go to mongoose.config.js