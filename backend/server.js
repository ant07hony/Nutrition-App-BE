// DEPENDENCIES
require("dotenv").config()
require("./config/db.connection.js")
const {PORT} = process.env
const express = require("express")
const journalRouter = require("./routes/journal-router.js")
const authRouter = require("./routes/auth-router")
const app = express()
const cors = require("cors")
const morgan = require("morgan")

// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


// MIDDLEWARE ROUTER
app.use('/journal', journalRouter)
app.use('/auth', authRouter)


// ROUTES
app.get("/", (req, res) => {
    res.send("Hello You Filthy Animal")
})

// LISTENER
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))