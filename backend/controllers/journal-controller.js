const express = require("express")
const {JournalEntries} = require("../models/Journal")


// JOURNAL INDEX ACTION
async function index(req, res, next){
    try {
        // get all journals
        res.status(200).json(await JournalEntries.find({}))
        .populate('owner', 'username -_id')

    }catch(error){
        res.status(400).json(error)
    }
}

// JOURNAL CREATE ACTION
async function create(req, res, next){
    try {
        // create new journal
        res.json(await JournalEntries.create(req.body))
        console.log(req.body)

    }catch(error){
        res.status(400).json(error)
    }
}

// JOURNAL SHOW ACTION
async function detail(req, res, next){
    try {
        // send one journal
        res.status(200).json(await JournalEntries.findById(req.params.id))
        .populate("owner")
        .exec()
        
        

    }catch(error){
        res.status(400).json(error)
    }
}

// JOURNAL UPDATE ACTION
async function update(req, res, next){
    try {
        // send one journal
        res.json(await JournalEntries.findByIdAndUpdate(req.params.id, req.body, {new:true}))

    }catch(error){
        res.status(400).json(error)
    }
}

// JOURNAL DESTROY ACTION
async function destroy(req, res, next){
    try {
        // send one journal
        res.json(await JournalEntries.findByIdAndRemove(req.params.id))

    }catch(error){
        res.status(400).json(error)
    }
}

module.exports = {
    index,
    create,
    getOne: detail,
    update,
    delete: destroy
}