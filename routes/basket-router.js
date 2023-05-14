const express = require("express")
const router = express.Router()
const basketCtrl = require("../controllers/basket-controller")
const { requireToken } = require("../middleware/auth")

// BAKSET INDEX ROUTE
router.get('/:id', basketCtrl.index)

// BASKET CREATE ROUTE
router.post('/:id', basketCtrl.create)

// BASKET SHOW(detail) ROUTE
router.get('/:id', basketCtrl.show)

// BASKET UPDATE ROUTE
router.put('/:id', basketCtrl.update)

// BASKET DELETE ROUTE
router.delete('/:id', basketCtrl.delete)

module.exports = router