const express = require("express")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const { createUserToken } = require('../middleware/auth')

async function register(req, res, next){
    try{
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(req.body.password, salt)

        const cachedPW = req.body.password

        req.body.password = passwordHash

        const newUser = await User.create(req.body)

        if (newUser){
            req.body.password = cachedPW
            const authenticatedUserToken = createUserToken(req, newUser)
            res.status(200).json({
                user: newUser,
                token: authenticatedUserToken,
            })
        }else {
            throw new Error("Something went wrong")
        }
    }catch(err){
        res.status(400).json({ err: err.message })
    }
}

async function login(req, res, next) {
    try{
        const loggingUser = req.body.username
        const foundUser = await User.findOne({ username: loggingUser })
        consttoken = await createUserToken(req, foundUser)
        res.status(200).json({
            user: foundUser,
            token,
        })
    }catch(err){
        res.stats(401).json({ error: err.message })
    }
}

async function logout(req, res, next) {
    try{
        res.status(200).json({
            token: ""
        })
    }catch(err){
        res.status(400).json({ error: err.message })
    }
}
 
module.exports = {
    register,
    login,
    logout,
}