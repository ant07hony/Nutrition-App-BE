const express = require("express")
const { JournalEntries } = require("../models/Journal")
const { requireToken } = require("../middleware/auth")
const { handleValidateOwnership } = require("../middleware/auth")


// JOURNAL INDEX ACTION
async function index(req, res, next) {
    try {
        // get all journals
        res.status(200).json(await JournalEntries.find({}))
            .populate('owner', 'username -_id')

    } catch (error) {
        res.status(400).json(error)
    }
}

// JOURNAL CREATE ACTION
async function create(req, res, next) {
    try {
        // create new journal
        const owner = req.user._id
        req.body.owner = owner

        const newEntry = await JournalEntries.create(req.body)
        // console.log(req.body)
        res.status(201).json(newEntry)
    } catch (error) {
        res.status(400).json({
            error: err.message,
        })
    }
}

// JOURNAL SHOW ACTION
async function detail(req, res, next) {
    try {
        // send one journal
        res.status(200).json(await JournalEntries.findById(req.params.id))
            .populate("owner")
            .exec()



    } catch (error) {
        res.status(400).json(error)
    }
}

// JOURNAL UPDATE ACTION
async function update(req, res, next) {
    try {
        // send one journal
        handleValidateOwnership(req, await JournalEntries.findById(req.params.id))

        const updatedEntry = await JournalEntries.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json(updatedEntry)

    } catch (error) {
        res.status(400).json({
            error: err.message
        })
    }
}

// JOURNAL DESTROY ACTION
async function destroy(req, res, next) {
    try {
        // send one journal
        handleValidateOwnership(req, await JournalEntries.findById(req.params.id))

        const deletedEntry = await JournalEntries.findByIdAndRemove(req.params.id)
        res.status(200).json(deletedEntry)

    } catch (error) {
        res.status(400).json({
            error: err.message
        })
    }
}

module.exports = {
    index,
    create,
    getOne: detail,
    update,
    delete: destroy
}