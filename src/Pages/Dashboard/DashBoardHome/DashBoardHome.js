import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import img1 from '../../../Images/1.jpg'
import img2 from '../../../Images/2.jpg'


const DashBoardHome = () => {
    return (
       <Container sx={{margin:2}} spacing={{ xs: 2, md: 3 }}>
           <Grid  container spacing={{ xs: 2, md: 3 }}>
  <Grid  item xs={6} md={6} sm={12}>
   <img 
   src={img1}  
   />
  </Grid>
  <Grid item xs={6} md={6} sm={12}>
  <img 
   src={img2}  
   />
  </Grid>
</Grid>
       </Container>
    );
};

export default DashBoardHome;