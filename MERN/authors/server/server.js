const express = require('express')
const cors  = require("cors");
const app = express()

require('./configs/mongoose.configs');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

require('./routes/author.route')(app)

app.listen(8000, () => console.log('Listening on port: 8000'));
