import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';



const AddProduct = () => {
  const [products,setProducts]=useState({})
  // const product={products};
  console.log( products)

  const handleAddProduct=e=>{
    const field=e.target.name;
    const value=e.target.value;
    const newAddProduct={ ...products};
    newAddProduct[field]=value;
    setProducts(newAddProduct);
}

const ReviewAddProduct=e=>{
  
  fetch('http://localhost:5000/products',{
    method:'POST',
    headers: { "content-type": "application/json" },
    body: JSON.stringify(products),
  })
  .then(res=>res.json())
  .then(data=>{
    setProducts('Products added succesfully');
    console.log(data)
})

  e.preventDefault();
}

    return (
        <Container>
           
              <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{mt:8}} item xs={12} md={6}>
          <Typography sx={{fontWeight:600}} variant="h4" gutterBottom>
          Add a Product
        </Typography>
        <form onSubmit={ReviewAddProduct}>
        <TextField 
        sx={{width:'75%', m:1}}
        id="standard-img" 
        label="Image Url"
        type="img"
        name="img"
        onBlur={handleAddProduct}
        variant="standard" />
      <TextField 
        sx={{width:'75%', m:1}}
        id="standard-name" 
        label="Name"
        name="name"
        type="name"
        onBlur={handleAddProduct}
        variant="standard" />
        <br/>

      <TextField
  sx={{width:'75%', m:1}}
          id="standard-textarea"
          label="Description"
          placeholder="Description"
          rows={2}
          name="description"
          type="description"
          onBlur={handleAddProduct}
          multiline
          variant="standard"
        />
         <TextField 
        sx={{width:'75%', m:1}}
        id="standard-number" 
        label="Tk."
        name="price"
        type="number"
        onBlur={handleAddProduct}
        variant="standard" />
      
              <TextField 
        sx={{width:'75%', m:1}}
        id="standard-rating" 
        label="Rating"
        name="rating"
        type="rating"
        onBlur={handleAddProduct}
        variant="standard" />
      
  <br/>

  <Button  sx={{width:'50%', mt:2}} type='submit' variant="contained">Add a Product</Button>


  </form>
    </Grid>
    
  </Grid>
</Box>
        </Container>
     
    );
};

export default AddProduct;