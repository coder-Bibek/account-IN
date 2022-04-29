import cors from "cors"
import connection from "../config/config"
import express from "express"
import * as router from "./router"

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// connect to database
connection.connect((err) => {
    if (err) throw err;

    console.log(`🚀 Connected to ${process.env.DATABASE} database`)
})

// routes
const version = process.env.VERSION || 'v1'

app.use(`/${version}/api`, router.users)

// start server
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`🚀 server started succesfully at http://${process.env.HOST}:${port}`)
})