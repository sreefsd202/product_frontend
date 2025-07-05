
import { Button } from '@mui/material';
import React from 'react'
import {useNavigate } from 'react-router-dom';


export const User = () => {
  const user=JSON.parse(localStorage.getItem("user"));
    const navigate=useNavigate()
    const handleLogOut=()=>{
        localStorage.removeItem('user')
        navigate("/login")
    }
  return (
    <div>
      
        <h2>Name:{user.name}</h2>
        <h2>Email:{user.email}</h2>
        <Button variant='contained' onClick={handleLogOut}>Logout</Button>
    </div>
  )
}