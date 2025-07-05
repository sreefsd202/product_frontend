import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
      <AppBar sx={{ background:' #5C2D0F'}} >
        <Toolbar>

          <Typography variant='h4' sx={{ fontFamily: 'Bernard MT Condensed' }}>
            Product App
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            {/* <Link to='/add'><Button variant='contained' sx={{backgroundColor:'white',color:'black'}}>Add</Button></Link>&nbsp;&nbsp;
            <Link to='/view'><Button variant='contained' sx={{backgroundColor:'white',color:'black'}}>View</Button></Link>&nbsp;&nbsp; */}
            <Link to='/login'><Button variant='contained' sx={{backgroundColor:'white',color:'black'}}>Login</Button></Link>&nbsp;&nbsp;
            <Link to='/sign'><Button variant='contained' sx={{backgroundColor:'white',color:'black'}}>Signup</Button></Link>
          </Box>
        </Toolbar>
      </AppBar>
      <br /><br />
    </div>
  )
}

export default Navbar
