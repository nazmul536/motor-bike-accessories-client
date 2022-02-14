import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

const AddReviews = () => {
    const [reviews,setReviews]=useState({});

    const handleReview=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newReviews={ ...reviews};
        newReviews[field]=value;
        setReviews(newReviews);
    }

    const ReviewSubmit=e=>{
       
      fetch('http://localhost:5000/reviews',{
          method:'POST',
          headers: { "content-type": "application/json" },
          body: JSON.stringify(reviews),
      })
      .then(res=>res.json())
      .then(data=>{
        setReviews('')
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
    Add a Reviews
  </Typography>
  <form onSubmit={ReviewSubmit}>
 

 
 <TextField 
  sx={{width:'75%', m:1}}
  id="standard-name" 
  label="Name"
  name="name"
  onBlur={handleReview}
  type="text"
  

  variant="standard" />
  <br/>

  <TextField
  sx={{width:'75%', m:1}}
          id="standard-textarea"
          label="Description"
          placeholder="Description"
          name="description"
          onBlur={handleReview}
          rows={2}
          multiline
          variant="standard"
        />
  <TextField
  sx={{width:'75%', m:1}}
          id="outlined-number"
          label="Rating"
          type="number"
          name="rating"
          InputLabelProps={{
            shrink: true,
          }}
        /><br/>
        

 
  <Button  sx={{width:'50%', mt:2}} type='submit' variant="contained">Add a Reviews</Button>
  
  </form>
    </Grid>
    
  </Grid>
</Box>
        </Container>
    );
};

export default AddReviews;