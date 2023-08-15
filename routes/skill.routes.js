const { Router } = require("express")
const Skill = require("../models/skill.model")
const router = Router()

router.get("/skill", async (req, res) => {
    try {
        const skills = await Skill.find()
        res.status(200).json(skills)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/skill", async (req, res) => {
    const newSkill = req.body
    try {
        const skill = await Skill.create(newSkill)
        res.status(201).json(skill)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete("/skill/:id", async (req, res) => {
    const { id } = req.params
    try {
        await Skill.findByIdAndDelete(id)
        res.status(200).json()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
