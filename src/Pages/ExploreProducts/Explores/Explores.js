import React,{useState} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Explore from '../Explore/Explore';
import { useEffect } from 'react';

const products=[
    {
      key:'1',
      name:'Suzuki Intruder 155cc DD',
      description:`Engine: 154.9cc, Top Speed:120 Kmph (approx), Mileage: 50 Kmpl (average)`,
      img:'https://www.bdstall.com/asset/product-image/giant_90926.jpg',
      price:'275,000',
      rating:4,
    },
    {
      key:'2',
      name:'Suzuki Gixxer SF 150cc DD',
      description:'Engine: 154.9cc, Top Speed:140 Kmph (approx), Mileage: 47 Kmpl (average)',
      img:'https://www.bdstall.com/asset/product-image/giant_91295.jpg',
      price:'224,950',
      rating:5
    }
  ]


const Explores = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
  
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setProducts(data)
    })
  },[])
      return (
          <div>
               <Box sx={{ flexGrow: 1, my:4 }}>
            <Typography sx={{fontWeight:600, mb:5}} variant="h4" gutterBottom component="div">
         Products
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              products?.map(product=><Explore
                
                key={product._id}
                 product={product}
               ></Explore>)
          }
        </Grid>
      </Box>
          </div>
      );
  };

export default Explores;