const mongoose = require("mongoose")

const JournalEntriesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: Date, required: true, default: new Date()},
    time: {type: Number, required: true, default: new Date().getTime()},
    description: {type: String, required: true},
    entry: {type: String, required: true},
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    basket: [ 
        { type: mongoose.Schema.Types.ObjectId,
        ref: 'Basket' }
     ]
    
},{
    timestamps: true
})

const JournalEntries = mongoose.model("JournalEntries", JournalEntriesSchema)

module.exports = JournalEntries