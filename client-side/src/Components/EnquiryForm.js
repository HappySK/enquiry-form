import { TextField } from "@material-ui/core";
import  axios  from 'axios'

export const EnquiryForm = () => {
  
  const getRes = () => {
    axios.get('/send').then(res => {
      console.log(res)
    })
  }
  
  return(
    <div>
      <h1>Hello World</h1>
      <button onClick={getRes}>Get Response from server</button>
    </div>
  )
}
