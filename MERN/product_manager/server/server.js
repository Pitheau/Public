const express = require('express');
const cors =require("cors")
const app = express();

//config mongoose
require('./configs/mongoose.config');

//config express
app.use(cors())
app.use(express.json());
app.use(express.urlencoded( {extended: true}))


//run routes
require('./routes/product.routes.js')(app); 





app.listen(8000, () => {
    console.log("Listening at Port 8000")
})