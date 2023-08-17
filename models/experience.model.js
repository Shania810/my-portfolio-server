const { Schema, model } = require("mongoose")

const experienceSchema = new Schema({
    position: { type: String, required: [true, "position is required"], lowercase: true, trim: true, unique: true },
    company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    description: { type: String, required: [true, "description is required"], lowercase: true, trim: true },
    duration: { type: String, required: [true, "duration is required"], lowercase: true, trim: true },
    skills: [{ type: Schema.Types.ObjectId, ref: "Skill", required: true }]
})

module.exports = model("Experience", experienceSchema)