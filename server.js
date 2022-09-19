const express = require('express')
const db = require('./config/connection')
const routes = require("./routes")

// Express confit
const app = express()
const PORT = 3002

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

db.once('open', () => {
app.listen(PORT, () => {
    console.log(`App running: http://localhost:${PORT}`)
  })
})