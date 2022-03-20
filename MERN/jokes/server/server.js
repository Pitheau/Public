//import all dependencies
const express = require("express")
const app = express()


// config ths mongoose
require("./configs/mongoose.config")


//espress config for post
app.use(express.json(), express.urlencoded({extended: true}));

//get the routes
//option 1
const Routes = require("./routes/joke.route")
Routes(app)
//option 2
require("./routes/joke.route")(app)


//listen to the port
app.listen(8000, () =>console.log(" The serve is all fired up on port 8000"));