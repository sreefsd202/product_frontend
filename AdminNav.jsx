import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div>
          <AppBar sx={{ background:' #04381f'}} >
        <Toolbar>
          <Typography sx={{fontSize:32,color:'white'}}>Admin</Typography>
           <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Link to='/add'><Button variant='contained' sx={{backgroundColor:'white',color:'black'}}>Add</Button></Link>&nbsp;&nbsp;
            <Link to='/view'><Button variant='contained' sx={{backgroundColor:'white',color:'black'}}>View</Button></Link>&nbsp;&nbsp;
          </Box>
        </Toolbar>
      </AppBar>  
    </div>
  )
}

export default AdminNav