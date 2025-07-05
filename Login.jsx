import { Box } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { Button, TextField, Typography } from '@mui/material'
import {useNavigate } from 'react-router-dom'

const Login = () => {
  var[linput,lsetinput]= useState({Email:"",Password:""})
var navigate=useNavigate()

const inputHandeler=(e)=>{
  lsetinput({...linput,[e.target.name]:e.target.value})
  console.log(linput)
}
const handlelogin = () => {
  axios.post("http://localhost:3000/login",linput)
    .then((res)=>{
      alert(res.data.message)
      console.log(res.data.message)
      if(res.data.message==="Logged in successfully"){
        localStorage.setItem("user",JSON.stringify({
          email:res.data.email,
          name:res.data.name,
          userType:res.data.userType,
          id:res.data.userId
        }))
         
        if(res.data.userType==="admin"){
          navigate("/admin")
        }
        else{
          navigate("/user")
        }
      }
    })
.catch((err)=>{
  console.log("Login error:",err)
  alert("An error occurred during login")
})
    }

  return (
    <div>
        
         <Box
      sx={{
        height: 250,
        width: 300,
        my: 4,
        paddingTop:5,
        paddingBottom:5,
        border: '2px solid grey',
        // backgroundColor:'rgb(233, 215, 217);',
       
      }}
    ><Typography variant='h4' sx={{ fontFamily:'Bernard MT Condensed'}}>Login</Typography> 
      <br></br> <TextField variant='outlined' label='Email' name="Email" value={linput.Email} onChange={inputHandeler}/><br></br><br></br>
        <TextField variant='outlined' label='Password' name="Password" value={linput.Password} onChange={inputHandeler}/><br></br><br></br>
    
        <Button variant='contained'onClick={handlelogin} sx={{backgroundColor:'#003b3b'}}>SIGNUP</Button>
    </Box>
    </div>
  )
}

export default Login
