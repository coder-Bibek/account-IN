import express from "express"

require('dotenv').config()

const app = express()

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`🚀 server started succesfully at ${port}`)
})