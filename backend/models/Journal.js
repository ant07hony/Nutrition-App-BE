const mongoose = require("mongoose")

const JournalSchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: Date, required: true},
    time: {type: Number, required: true},
    description: {type: String, required: true},
    entry: {type: String, reuired: true},
    
},{timestamps: true})

const Journal = mongoose.model("Journal", JournalSchema)

module.exports = Journal