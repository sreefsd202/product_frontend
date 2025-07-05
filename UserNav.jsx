import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = () => {
  return (
    <div>
        <AppBar sx={{ background:' #04381f'}} >
        <Toolbar>
          <Typography sx={{fontSize:32,color:'white',textAlign:'center'}}>User</Typography>
           <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Link to='/view'><Button variant='contained' sx={{backgroundColor:'white',color:'black'}}>View</Button></Link>&nbsp;&nbsp;
          </Box>
        </Toolbar>
      </AppBar>   
    </div>
  )
}

export default UserNav