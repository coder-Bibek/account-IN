import sql from "mysql"

require('dotenv').config()

const connection = sql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

export default connection;