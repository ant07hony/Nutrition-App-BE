const mongoose = require("mongoose")

const basketSchema = new mongoose.Schema({
    dataType: { type: String, required: true},
    query: { type: String, required: true},
    foodNutrients: { type: String}

},{
    timestamps: true
})

const Basket = mongoose.model('Basket', basketSchema)

module.exports = Basket