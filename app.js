const express = require("express")
const app = express()
const connectDB = require("./db/db.config")

connectDB()
module.exports = app