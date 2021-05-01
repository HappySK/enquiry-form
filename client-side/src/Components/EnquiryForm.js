import { useState } from 'react'
import { Button, TextField } from "@material-ui/core";
import  axios  from 'axios'


export const EnquiryForm = () => {
  
  const [response, setResponse] = useState()
  const [state, setState] = useState()
  const [details, setDetails] = useState()
  
  const handleChange = (e) => {
      var { name, value } = e.target
      setDetails({
        ...details,
        [name] : value
      })
  }

  const postdata = (e) => {
    e.preventDefault()
    axios.post('/send', details).then((res) => {
      setResponse(res.data)
    })
  }

  return(
    <div>
      <h1>Hello World</h1>
      <h1>{response}</h1>
      <form onSubmit={postdata} method="post">
        <div>
          <TextField type="text" label="Name" variant="outlined" name="Name" onChange={handleChange}/>
        </div>
        <div>
          <TextField type="email" label="Email ID" variant="outlined" name="EmailID" onChange={handleChange}/>
        </div>
        <div>
          <TextField type="text" label="Mobile Number" variant="outlined" name="MobileNo" onChange={handleChange}/>
        </div>
        <div>
          <TextField type="text" label="FeedBack" name="Feedback" variant="outlined" onChange={handleChange}/>
        </div>
        <div>
          <Button variant="contained" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}
