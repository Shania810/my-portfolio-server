const { Router } = require("express")
const Person = require("../models/person.model")
const router = Router()

router.get("/person", async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/person", async (req, res) => {
    const newPerson = req.body
    try {
        const person = await Person.create(newPerson)
        res.status(201).json(person)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete("/person/:id", async (req, res) => {
    const { id } = req.params
    try {
        await Person.findByIdAndDelete(id)
        res.status(200).json({ message: "Deleted with success" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router