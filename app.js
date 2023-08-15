const express = require("express")
const app = express()
const connectDB = require("./db/db.config")
const skillRoutes = require("./routes/skill.routes")
const projectRoutes = require("./routes/project.routes")

connectDB()
app.use("/",skillRoutes)
app.use("/",projectRoutes)

module.exports = app