const { Schema, model } = require("mongoose")

const skillSchema = new Schema({
    title: { type: String, required: [true, "title is required"], lowercase: true, trim: true, unique: true },
    image: { type: String, required: [true, "image is required"], lowercase: true, trim: true, unique: true }
})

module.exports = model("Skill", skillSchema)