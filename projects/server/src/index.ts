import express from "express"
import cors from "cors"
import { connection } from "../config/config"

require('dotenv').config()

const app = express()
app.use(cors())

// connect to database
const config = {
    host: process.env.HOST || 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

const db = connection({ config })
db.connect((err) => {
    if (err) throw err;

    console.log(`🚀 Connected to ${config.database} database`)
})

// start server
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`🚀 server started succesfully at http://${config.host}:${port}`)
})