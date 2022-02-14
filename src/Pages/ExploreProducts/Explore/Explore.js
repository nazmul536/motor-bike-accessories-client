import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Explore = (props) => {

    const {_id,name,description,img,rating,price}=props?.product;
    return (
        <Grid  item xs={4} sm={4} md={4}  >
        <Card sx={{ minWidth: 300,border: 0,boxShadow: 0 }}>
        <CardMedia
     component="img"
     style={{
       width:'350px', 
       height:'260px', 
       margin:'0 auto'
     }}
     image={img}
     alt="green iguana"
   />
   <CardContent>
     <Typography sx={{fontWeight:600, color:'green'}} variant="h6" component="div">
      {name}
     </Typography>
     
     <Typography sx={{mx:3, my:2}} variant="body2" color="text.secondary">
     {description}
     </Typography>
     <Typography sx={{ mb:2}}  variant="h5" component="div">
      Tk.{price}
     </Typography>
     <Typography sx={{mx:3}} variant="body2" color="text.secondary">
     <Rating name="read-only" value={rating} readOnly />
     </Typography>
   </CardContent>
   <Link style={{textDecoration:'none', fontWeight:600}} to={`/addOrderDetails/${_id}`}><Button variant="contained">Buy Now</Button></Link>

  
 </Card>
     </Grid>
    );
};

export default Explore;