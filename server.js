const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
// app.use(dotenv())

async function main(req)
{
  let testaccount = await nodemailer.createTestAccount()
  
  let transporter = nodemailer.createTransport({
    host : 'smtp.ethereal.email',
    port : 587,
    secure : false,
    auth : {
      user : testaccount.user,
      pass : testaccount.pass
    },
  })
  
  let info = await transporter.sendMail({
    from : 'sample@example.com',
    to : 'shravanyoserene1729@gmail.com',
    subject : 'Test Mail',
    text : req.body.Feedback
  })
  
  console.log("Message Send %s", info.messageId)
  console.log("Message URL %s", nodemailer.getTestMessageUrl(info))
}


console.log(process.env.port)

app.post('/send',(req, res) => {
  main(req).catch(console.error)
  res.send('Email Sent Successfully')
})

app.listen(5000,() => {
  console.log("Express Server Started")
})

