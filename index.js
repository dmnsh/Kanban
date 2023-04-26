require("dotenv").config()
const express = require("express")
const mongodb = require('./mongodb')
const indexRouter = require("./routes/index.router")

app = express()

const PORT = process.env.PORT || 3000

app.use('/api', indexRouter)

const startServer = async () => {
    try {
        await mongodb()
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
    } catch (e) {
        console.error("Server Error: " + e.message)
    }
}

startServer()
