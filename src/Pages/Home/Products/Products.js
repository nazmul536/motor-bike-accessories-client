import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Product from './../Product/Product';


const products=[
    {
      key:'1',
      name:'Kawasaki Ninja 125',
      description:` Engine: 125cc (liq-cooled), Top Speed:120 Kmph (approx), Mileage: 45 Kmpl (average)`,
      img:'https://i.ibb.co/5k3NHzX/product1.png',
      price:'499,00',
      rating:5,
    },
    {
      key:'2',
      name:'Kawasaki Z125 ABS ',
      description:'Engine: 125cc (liq-cooled), Top Speed: 125 Kmph (approx),Mileage	: 45 Kmpl (average)',
      img:'https://i.ibb.co/tXLpt1m/product2.png',
      price:'419,000',
      rating:5
    },
    {
      key:'3',
      name:'Yamaha R15 v4',
      description:'Engine: 155cc, Top Speed: 140 Kmph (approx),Mileage	: 40 Kmpl (average)',
      img:'https://i.ibb.co/Y79YWwx/product3.png',
      price:"5,05,000",
      rating:4
    },
    {
      key:'4',
        name:'Yamaha XSR 155',
        description:'Engine: 150cc, Top Speed: 140 Kmph (approx),Mileage: 40 Kmpl (average)',
        img:'https://i.ibb.co/2nmM5tm/kisspng-yamaha-motor-company-yamaha-xsr-700-motorcycle-suz-yamaha-5aca3b0e6670c8-5603648115232028304.png',
       price:'545,000',
       rating:5
    },
    {
      key:'5',
        name:'Honda CB150R Exmotion',
        description:'Engine: 150cc, Top Speed: 150 Kmph (approx),Mileage: 35 Kmpl (average)',
       img:'https://i.ibb.co/ThhdNVL/pngkey-com-honda-motorcycle-logo-png-3280535.png',
       price:'550,000',
       rating:5
    },
    {
      key:'6',
      name:'Honda CB Hornet',
      description:'Engine: 160cc, Top Speed: 140 Kmph (approx),Mileage: 40 Kmpl (average)',
      img:'https://i.ibb.co/fHcpwTS/product6.jpg',
      price:'255000',
      rating:5
    }
  ]


const Products = () => {
    return (
        <Box sx={{ flexGrow: 1, my:4 }}>
        <Typography sx={{fontWeight:600, mb:5}} variant="h4" gutterBottom component="div">
     Services
    </Typography>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
      {
          products.map(product=><Product
             key={product.id}
             product={product}
           ></Product>)
      }
    </Grid>
  </Box>
    );
};

export default Products;