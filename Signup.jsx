import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
const Signup = () => {
  var[uinput,usetinput]=useState({Uname:"",Email:"",Password:"",Phone:""})

  const inputHandeler=(e)=>{
  usetinput({...uinput,[e.target.name]:e.target.value})
  console.log(uinput)
}
const adduser = () => {
  axios.post("http://localhost:3000/uadd",uinput)
    .then((res)=>{
      alert(res.data.message)
      console.log(res.data.message)
       })

    }
    
  return (
    <div>
          
          <Box
      sx={{
        height: 450,
        width: 300,
        my: 4,
     
        paddingBottom:5,
        border: '2px solid grey',
        backgroundColor:'rgb(233, 215, 217);'

      }}
    >
<Typography variant='h4'  sx={{marginTop:5 ,fontFamily:'Bernard MT Condensed'}}>Signup</Typography><br></br>
        <TextField variant='outlined' label='Name' name="Uname" value={uinput.Uname} onChange={inputHandeler}/><br></br><br></br>
        <TextField variant='outlined' label='Email' name="Email" value={uinput.Email} onChange={inputHandeler}/><br></br><br></br>
        <TextField variant='outlined' label='Password' name="Password" value={uinput.Password} onChange={inputHandeler}/><br></br><br></br>
        <TextField variant='outlined' label='Phone' name="Phone" value={uinput.Phone} onChange={inputHandeler}/><br></br><br></br>
        <Button variant='contained' sx={{backgroundColor:'#003b3b'}} onClick={()=>{adduser()}}>SIGNUP</Button></Box>
    </div>
  )
}

export default Signup