const express = require('express');
const app = express();
require('../server/routes/product.routes.js')(app); 
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})