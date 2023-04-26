require("dotenv").config()
const express = require("express")

app = express()

const PORT = process.env.PORT || 3000

const startServer =  () => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
    } catch (e) {
        console.error("Server Error: " + e.message)
    }
}
