const { Schema, model } = require("mongoose")

const feedbackSchema = new Schema({
    person: { type: Schema.Types.ObjectId, ref: "Person", required: true },
    description: { type: String, required: [true, "description is required"], lowercase: true, trim: true, unique: true }
})

module.exports = model("Feedback", feedbackSchema)