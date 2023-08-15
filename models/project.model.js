const { Schema, model } = require("mongoose")

const projectSchema = new Schema({
    title: { type: String, required: [true, "title is required"], lowercase: true, trim: true, unique: true },
    image: { type: String, required: [true, "image is required"], lowercase: true, trim: true, unique: true },
    description: { type: String, required: [true, "description is required"], lowercase: true, trim: true }
})

module.exports = model("Project", projectSchema)