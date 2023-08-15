const express = require("express")
const app = express()
const connectDB = require("./db/db.config")
const skillRoutes = require("./routes/skill.routes")
const projectRoutes = require("./routes/project.routes")
const feedbackRoutes = require("./routes/feedback.routes")
const experienceRoutes = require("./routes/experience.routes")

connectDB()
app.use("/", skillRoutes)
app.use("/", projectRoutes)
app.use("/", feedbackRoutes)
app.use("/", experienceRoutes)

module.exports = app