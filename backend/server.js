// DEPENDENCIES
require("dotenv").config()
const {PORT} = process.env
const express = require("express")
const app = express()

// ROUTES
app.get("/", (req, res) => {
    res.send("Hello You Filthy Animal")
})

// LISTENER
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))