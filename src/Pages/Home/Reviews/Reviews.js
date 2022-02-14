import React, {useState,useEffect} from 'react';
import Review from './../Review/Review';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


const Reviews = () => {
    const[reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setReviews(data)
        })
    },[])

    return (
        <div>

<Box>
<Typography sx={{fontWeight:600, mt:8}} variant="h4" gutterBottom component="div">
       Reviews
      </Typography>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

{
    reviews?.map(review=><Review
        key={review._id}
        review={review}
    >
    </Review>)
}
 </Grid>
</Box>
            
        </div>
    );
};

export default Reviews;