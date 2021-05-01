const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const app = express()
app.use(cors())
app.use(express.json())

async function main()
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
    text : 'Hello this is text Test'
  })
  
  console.log("Message Send %s", info.messageId)
  console.log("Message URL %s", nodemailer.getTestMessageUrl(info))
}

main().catch(console.error)


app.post('/send',(req, res) => {
  console.log(req.body)
  res.send('Email Sent Successfully')
})

app.listen(5000,() => {
  console.log("Express Server Started")
})

