// DEPENDENCIES
const express = require("express")
const router = express.Router()
const journalCtrl = require("../controllers/journal-controller")

// ROUTES

// JOURNAL INDEX ROUTE
router.get('/', journalCtrl.index)

// JOURNAL CREATE ROUTE
router.post('/', journalCtrl.create)

// JOURNAL SHOW(detail) ROUTE
router.get('/:id', journalCtrl.getOne)

// JOURNAL UPDATE ROUTE
router.put('/:id', journalCtrl.update)

// JOURNAL DELETE ROUTE
router.delete('/:id', journalCtrl.delete)

module.exports = router