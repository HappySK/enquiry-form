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
      }, console.log(details))
  }

  return(
    <div>
      <h1>Hello World</h1>
      <form>
        <div>
          <TextField label="Name" variant="outlined" name="Name" onBlur={handleChange}/>
        </div>
        <div>
          <TextField label="Email ID" variant="outlined" name="EmailID" onBlur={handleChange}/>
        </div>
        <div>
          <TextField label="Mobile Number" variant="outlined" name="MobileNo" onBlur={handleChange}/>
        </div>
        <div>
          <TextField label="FeedBack" name="Feedback" variant="outlined" onBlur={handleChange}/>
        </div>
        <div>
          <Button variant="contained">Submit</Button>
        </div>
      </form>
    </div>
  )
}
