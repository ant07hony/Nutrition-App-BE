// DEPENDENCIES
const express = require("express")
const router = express.Router()
const journalCtrl = require("../controllers/journal-controller")
const { requireToken } = require("../middleware/auth")

// ROUTES

// JOURNAL INDEX ROUTE
router.get('/', journalCtrl.index)

// JOURNAL CREATE ROUTE
router.post('/', requireToken, journalCtrl.create)

// JOURNAL SHOW(detail) ROUTE
router.get('/:id', journalCtrl.getOne)

// JOURNAL UPDATE ROUTE
router.put('/:id', requireToken, journalCtrl.update)

// JOURNAL DELETE ROUTE
router.delete('/:id', requireToken, journalCtrl.delete)

module.exports = router