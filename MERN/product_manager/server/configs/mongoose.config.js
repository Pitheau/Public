
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/productmanagerdb", {
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(() => console.log("established a conccention to the database"))
.catch(err => console.log("something went wrong when conneting to the database" , err));