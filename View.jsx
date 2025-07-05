import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const View = () => {
  var[product,setproduct]=useState([])
var navigate=useNavigate()
  useEffect(()=>{

  axios.get("http://localhost:3000/view")
  .then((res)=>{
    console.log(res.data)
    setproduct(res.data)
  })
  },[])

  //del func
  const deleteproduct = (id) => {
    console.log(id)
    axios.delete("http://localhost:3000/del/"+id)
    .then((res)=>{
      alert(res.data.message)
      window.location.reload()
    })

  }

  //update func
const updateproduct=(val)=>{
  navigate("/add",{state:{val}})
}

const addToCart=(prodctId)=>{
  axios.post("http://localhost:3000/my-cart/",{
    userId: user?.id,
    productId: productId
  }).then((res)=>{
    alert(res.data.message);
  })
};



// const user=JSON.parse(localStorage.getItem("user"));
//  if(res.data.userType==="user"){

//  }
  return (
    <div>
      <Grid container spacing={2}>

{/* mapping */}
{product.map((val)=>{
  return(

 
<Grid item xs={12} md={4} sm={6}>
 
 <Card sx={{ maxWidth: 413 }}>
      <CardMedia
        sx={{ height: 330 }}
        image={val.Image}
        title="green iguana"
      />
      <CardContent  sx={{ height: 150 }}>
        <Typography gutterBottom variant="h5" component="div"  sx={{fontFamily:'Cambria'}}>
          {val.Pname}
        </Typography>
         <Typography gutterBottom variant="h5" component="div"  sx={{fontFamily:'Cambria' ,color:'red'}}>
          {val.Price}/-
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' ,fontFamily:'Cambria'}}>
          {val.Desc}
        </Typography>
      </CardContent>
      
         <CardActions >
          {
            user?.userType==="admin"?(
              <>
              <Button size="medium" variant='contained' color='success' onClick={()=>{updateproduct(val)}}>Update</Button>
              <Button size="medium" variant='contained' color='error' onClick={()=>{deleteproduct(val._id)}} >Delete</Button>
             </>
        ):(
          <Button size="medium" variant='contained' color='error' onClick={()=>{addtocart(val._id)}} >Add to cart</Button>
        )


         }
      </CardActions>
       
     
    </Card></Grid>
     )
})}</Grid>
    </div>
  )
}

export default View