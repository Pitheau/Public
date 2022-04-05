const express = require('express')
const cors  = require("cors");
const app = express()

require('./configs/mongoose.config');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// 3. run the routes command / until needed to avoid errors
require('./routes/our-library.route')(app)

app.listen(8000, () => console.log('Listening on port: 8000'));

