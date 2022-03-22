const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/person_db', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Established a connection to the database'))
.catch(err => console.log("Something went wrong when conneting to the database", err)); 