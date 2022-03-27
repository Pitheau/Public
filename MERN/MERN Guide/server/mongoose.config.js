// config to use mongoose  CHANGE to your PROJECT DB
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/YOUR-PROJECT-BD" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

// workflow; return to server.js and remove command / from 1.5 config mongoose and the db, 
