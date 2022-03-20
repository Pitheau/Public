const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "C'mon tell us the joke"],
        minlength: [10 ,"Must be 10 charactors long"]
    },
    punchline:{
        type: String,
        required: [true, "C'mon tell us the punchline"],
        minlength: [3, "Must be 3 charactors long"]
    }
},
{timestamps: true}
);
// //option 1
// const Joke = mongoose.model('Joke', JokeSchema);
// module.exports = Joke;

//option 2
module.exports.Joke = mongoose.model("Joke", JokeSchema)