const mongoose = require("mongoose")

const JournalEntrySchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: Date, required: true},
    time: {type: Number, required: true},
    description: {type: String, required: true},
    entry: {type: String, reuired: true},
    
},{timestamps: true})

const JournalEntry = mongoose.model("JournalEntry", JournalEntrySchema)

module.exports = JournalEntry