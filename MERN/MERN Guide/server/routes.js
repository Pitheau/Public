// 1. import controller , below if for Job
const JobController = require("../controller/job.controller")

// 2 .  TEST to confirm that your system is working
module.exports = (app) => {
    app.get("/api", JobController.index)
}
// 3 routes to add after confirmation, writed for Jobs project
    app.get("/api/jobs", JobController.allJobs)
    app.get("/api/jobs/:id", JobController.oneJob)
    app.post("/api/jobs", JobController.createJob)
    app.put("/api/jobs/:id", JobController.editJob)
    app.delete("/api/jobs/:id", JobController.deleteJob)
}

//
