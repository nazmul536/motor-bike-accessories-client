
import React,{useState} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ManageProduct from '../ManageProduct/ManageProduct'
import { useEffect } from 'react';


const ManageProducts = () => {
  const [manageProducts,setManageProducts]=useState([])
  useEffect(()=>{
  
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setManageProducts(data)
    })
  },[])
    return (
        <div>
             <Box sx={{ flexGrow: 1, my:4 }}>
          <Typography sx={{fontWeight:600, mb:5}} variant="h4" gutterBottom component="div">
       Manage All Products
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            manageProducts.map(manageproduct=><ManageProduct
              
              key={manageproduct._id}
              manageproduct={manageproduct}
             ></ManageProduct>)
        }
      </Grid>
      
    </Box>
        </div>
    );
};

export default ManageProducts;