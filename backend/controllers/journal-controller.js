const express = require("express")
const {JournalEntry} = require("../models")


// JOURNAL INDEX ACTION
async function index(req, res, next){
    try {
        // get all journals
        res.json(await JournalEntry.find({}))

    }catch(error){
        res.status(400).json(error)
    }
}

// JOURNAL CREATE ACTION
async function create(req, res, next){
    try {
        // create new journal
        res.json(await JournalEntry.create(req.body))
        console.log(req.body)

    }catch(error){
        res.status(400).json(error)
    }
}

// JOURNAL SHOW ACTION
async function detail(req, res, next){
    try {
        // send one journal
        res.json(await JournalEntry.findById(req.params.id))

    }catch(error){
        res.status(400).json(error)
    }
}

// JOURNAL UPDATE ACTION
async function update(req, res, next){
    try {
        // send one journal
        res.json(await JournalEntry.findByIdAndUpdate(req.params.id, req.body, {new:true}))

    }catch(error){
        res.status(400).json(error)
    }
}

// JOURNAL DESTROY ACTION
async function destroy(req, res, next){
    try {
        // send one journal
        res.json(await JournalEntry.findByIdAndRemove(req.params.id))

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