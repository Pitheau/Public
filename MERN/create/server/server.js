const express = require("express")
const app = express()

// config mongoose
// require("./configs/mongoose.config")


//express confirg for post
app.use(express.json(), express.urlencoded({extended: true}));

// routes
// require("./routes/person.routes")(app)


app.listen(8000, () => console.log(" the server is all fired up on port 8000"))