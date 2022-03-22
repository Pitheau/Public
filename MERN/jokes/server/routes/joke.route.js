
const JokeController = require("../controllers/joke.controller")

module.exports = app =>{
    app.get("/api/jokes", JokeController.allJokes)
    app.get("/api/joke/:id", JokeController.oneJoke)
    app.post("/api/joke", JokeController.createJoke)
    app.put("/api/joke/:id", JokeController.updateJoke)
    app.delete("/api/joke/:id", JokeController.deleteJoke)

}