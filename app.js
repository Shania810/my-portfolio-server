const express = require("express")
const app = express()
const connectDB = require("./db/db.config")
const skillRoutes = require("./routes/skill.routes")

connectDB()
app.use("/",skillRoutes)

module.exports = app