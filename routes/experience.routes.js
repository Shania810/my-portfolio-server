const { Router } = require("express")
const Experience = require("../models/experience.model")
const router = Router()

router.get("/experience", async (req, res) => {
    try {
        const experiences = await Experience.find().populate("company skills")
        res.status(200).json(experiences)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/experience", async (req, res) => {
    const newExperience = req.body
    try {
        const experience = await Experience.create(newExperience)
        res.status(201).json(experience)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete("/experience/:id", async (req, res) => {
    const { id } = req.params
    try {
        await Experience.findByIdAndDelete(id)
        res.status(200).json({ message: "Deleted with success" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router