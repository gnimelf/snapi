const express = require('express')
const routes = require("./controllers")

// DB config
require('dotenv').config()
const db = require('./config/connection')

// Express confit
const app = express()
const PORT = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes)

db.once('open', () => {
app.listen(PORT, () => {
    console.log(`App running: http://localhost:${PORT}`)
  })
})