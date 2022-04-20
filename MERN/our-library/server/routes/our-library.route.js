const StudentController = require("../controllers/our-library.controller")

module.exports = (app) => {
    app.get("/api", StudentController.index)
    app.get("/api/book", StudentController.allStudent)
    app.get("/api/book/:id", StudentController.oneStudent)
    app.post("/api/book", StudentController.createStudent)
    app.put("/api/book/:id", StudentController.editStudent)
    app.delete("/api/book/:id", StudentController.deleteStudent)

}