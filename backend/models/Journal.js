const mongoose = require("mongoose")

const JournalSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String

},{timestamps: true})

const Journal = mongoose.model("Journal", JournalSchema)

module.exports = Journal