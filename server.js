const app = require("./app")
const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT
app.listen(PORT || 2500, console.log(`Connected with the port ${PORT}`))
