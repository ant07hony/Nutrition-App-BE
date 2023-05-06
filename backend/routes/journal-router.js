// DEPENDENCIES
const express = require("express")
const router = express.Router()

// ROUTES

// JOURNAL INDEX ROUTE
router.get('/', async (req,res) => {
    res.status(200).json({ message: "journal index route" })
})

// JOURNAL CREATE ROUTE
router.post('/', async (req,res) => {
    res.status(200).json({ message: "journal create route"})
})

// JOURNAL SHOW(detail) ROUTE
router.get('/:id', async (req,res) => {
    res.status(200).json({ message: "journal show route: " + req.params.id})
})

// JOURNAL UPDATE ROUTE
router.put('/:id', async (req,res) => {
    res.status(200).json({ message: "journal show route: " + req.params.id})
})

// JOURNAL DELETE ROUTE
router.delete('/:id', async (req,res) => {
    res.status(200).json({ message: "journal show route: " + req.params.id})
})

module.exports = router