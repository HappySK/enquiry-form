const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.post('/send',(req, res) => {
  console.log(req.body)
  res.send('Form Submitted successfully')
})

app.listen(5000,() => {
  console.log("Express Server Started")
})

