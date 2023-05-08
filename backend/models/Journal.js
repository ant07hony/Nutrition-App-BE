const mongoose = require("mongoose")

const JournalSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: String,
    entry: String,
    date: {type: Date, required: true},
    time: Number,

},{timestamps: true})

const Journal = mongoose.model("Journal", JournalSchema)

module.exports = Journal