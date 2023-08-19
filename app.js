const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const connectDB = require("./db/db.config")
const skillRoutes = require("./routes/skill.routes")
const projectRoutes = require("./routes/project.routes")
const feedbackRoutes = require("./routes/feedback.routes")
const experienceRoutes = require("./routes/experience.routes")
const companyRoutes = require("./routes/company.routes")
const personRoutes = require("./routes/person.routes")

const app = express()
connectDB()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/", skillRoutes)
app.use("/", projectRoutes)
app.use("/", feedbackRoutes)
app.use("/", experienceRoutes)
app.use("/", companyRoutes)
app.use("/", personRoutes)

module.exports = app