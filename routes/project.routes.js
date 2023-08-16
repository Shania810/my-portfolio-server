const { Router } = require("express")
const Project = require("../models/project.model")
const router = Router()

router.get("/project", async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/project", async (req, res) => {
    const newProject = req.body
    try {
        const project = await Project.create(newProject)
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete("/project/:id", async (req, res) => {
    const { id } = req.params
    try {
        await Project.findByIdAndDelete(id)
        res.status(200).json({ message: "Deleted with success" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
