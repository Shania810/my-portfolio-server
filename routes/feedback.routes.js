const { Router } = require("express")
const Feedback = require("../models/feedback.model")
const router = Router()

router.get("/feedback", async (req, res) => {
    try {
        const feedbacks = await Feedback.find()
        res.status(200).json(feedbacks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/feedback", async (req, res) => {
    const newFeedback = req.body
    try {
        const feedback = await Feedback.create(newFeedback)
        res.status(201).json(feedback)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete("/feedback/:id", async (req, res) => {
    const { id } = req.params
    try {
        await Feedback.findByIdAndDelete(id)
        res.status(200).json({ message: "Deleted with success" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router