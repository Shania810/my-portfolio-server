const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected with DB: ${connection.connections[0].name}`)

    } catch (error) {
        console.log(error.message)

    }
}

module.exports = connectDB