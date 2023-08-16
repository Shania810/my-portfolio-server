const { Router } = require("express")
const Company = require("../models/company.model")
const router = Router()

router.get("/company", async (req, res) => {
    try {
        const companies = await Company.find()
        res.status(200).json(companies)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/company", async (req, res) => {
    const newCompany = req.body
    try {
        const company = await Company.create(newCompany)
        res.status(201).json(company)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete("/company/:id", async (req, res) => {
    const { id } = req.params
    try {
        await Company.findByIdAndDelete(id)
        res.status(200).json({ message: "Deleted with success" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
