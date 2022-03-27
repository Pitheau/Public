const AuthorController = require("../controllers/authors.controller")

module.exports = (app) =>{

    app.get("/api/author", AuthorController.allAuthors)
    app.get("/api/author/:id", AuthorController.oneAuthor)
    app.post("/api/author", AuthorController.createAuthor)
    app.put("/api/author/:id", AuthorController.editAuthor)
    app.delete("/api/author/:id", AuthorController.deleteAuthor)
}
