const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/send',(req, res) => {
  res.send('From Express Server')
})

app.listen(5000,() => {
  console.log("Express Server Started")
})

