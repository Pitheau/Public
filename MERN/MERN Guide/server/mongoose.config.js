// config to use mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/YOUR-PROJECT-BD" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => xonsole.log("Established a connection to the database"))
    .catch(err => xonsole.log("Something went wrong when connecting to the database", err));

// workflow; return to server.js and remove command / from 1.5 config mongoose and the db, 
