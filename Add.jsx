import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
const Add = () => {
var[input,setinput]=useState({Pname:"",Price:"",Desc:"",Image:""})
var navigate=useNavigate()
var location=useLocation()//to check current state of the page
console.log("loc",location.state)

const inputHandeler=(e)=>{
  setinput({...input,[e.target.name]:e.target.value})
  console.log(input)
}
  const addproduct = () => {
      if (location.state!==null){
        axios.put("http://localhost:3000/update/"+location.state.val._id,input)
        .then((res)=>{
      alert(res.data.message)
      console.log(res.data.message)
      navigate("/view")
    })
      }
    else{
       axios.post("http://localhost:3000/add",input)
    .then((res)=>{
      alert(res.data.message)
      console.log(res.data.message)
      navigate("/view")
    })

    }
  }

  //update
  useEffect(()=>{
    if (location.state!==null) {
        setinput({
          ...input,
          Pname:location.state.val.Pname,
          Price:location.state.val.Price,
          Desc:location.state.val.Desc,
          Image:location.state.val.Image,
        })
    }
  },[])

  return (
    <div>
      <Box
      sx={{
        height: 440,
        width: 300,
        my: 4,
        
        paddingTop:5,
        paddingBottom:5,
        border: '2px solid grey',
        backgroundColor:'rgb(225, 233, 215);;',
       textAlign:'center'
      }}
    >
        <Typography variant='h4' sx={{ fontFamily:'Bernard MT Condensed'}}>Add Product</Typography><br></br><br></br>
        <TextField variant='outlined' label='Product name' name="Pname" value={input.Pname} onChange={inputHandeler}/><br></br><br></br>
        <TextField variant='outlined' label='Price' name="Price" value={input.Price} onChange={inputHandeler}/><br></br><br></br>
        <TextField variant='outlined' label='Description' name="Desc" value={input.Desc} onChange={inputHandeler}/><br></br><br></br>
        <TextField variant='outlined' label='Image'name="Image" value={input.Image} onChange={inputHandeler}/><br></br><br></br>
        <Button variant='contained' sx={{backgroundColor:'#003b3b'}} onClick={()=>{addproduct()}} >Add</Button></Box>
    </div>
  )
}

export default Add
