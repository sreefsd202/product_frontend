import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const user=JSON.parse(localStorage.getItem("user"));
    const [cartItems,setCartItems]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/my-cart/"+user.id)
        .then((res)=>{
            setCartItems(res.data);
        })
        .catch((err)=> console.log(err));
    },[]);
  return (
    <div>
        <h2>My Cart</h2>

        <Grid container spacing={2} >
        {cartItems.map((item)=>(
            <Grid item xs={12} md={4} sm={6} key={item._id}>
             <Card>
            <CardMedia
            sx={{ height: 140 }}
            image={item.productId.Image}
      />
      <CardContent>
            <Typography variant='h5'>{item.productId.Pname}</Typography>
            <Typography variant='body2'>{item.productId.Disc}</Typography>
        </CardContent>
        
        </Card>
        </Grid>
        ))}
        </Grid>
    </div>
  )
}

export default Cart