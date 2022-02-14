import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const Product = (props) => {
    const {name,description,img,rating,price}=props.product;

    return (
        <Grid sx={{overflow:'hodden'}} item xs={8} sm={12} md={4}  >
           <Card sx={{ minWidth: 290, Height:400, border: 0,boxShadow: 0,marginX:3 }}>
           <CardMedia
        component="img"
        style={{
          width:'350px', 
          height:'250px', 
          margin:10,
        }}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
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
      <Button variant="contained">Buy Now</Button>

     
    </Card>
        </Grid>
    );
};

export default Product;