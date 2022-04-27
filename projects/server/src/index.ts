import express from "express"
import cors from "cors"

require('dotenv').config()

const app = express()

app.use(cors())

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`🚀 server started succesfully at ${port}`)
})