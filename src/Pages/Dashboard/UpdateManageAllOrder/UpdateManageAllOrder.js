import React, {useState,useEffect, useRef} from 'react';
import { Container,TextField,Button } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const UpdateManageAllOrder = () => {
    const [newDetails,setNewDetails]=useState({})
    const {id} = useParams()
    const [addUser,setAddUser]=useState({})
    const history=useHistory();
    const {user}=useAuth();


    const AddUser=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newAddUser={...addUser}
        newAddUser[field]=value;
        console.log(newAddUser)
        setAddUser(newAddUser);
      }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={6} md={6} sm={12}>
        <Typography sx={{fontWeight:600, mt:5}} variant="h4" gutterBottom>
     Update User
     </Typography>
    
     <form >
         <p>{id}</p>
     <TextField 
     sx={{width:'75%', m:1}}
     id="standard-name" 
     label="Your Name"
     type="name"
     name="name"
     defaultValue={user.displayName}
     onBlur={AddUser}
     variant="standard" />
    <TextField 
     sx={{width:'75%', m:1}}
     id="standard-email" 
     label="Your Email"
     name="email"
     defaultValue={user.email}
    
     type="email"
     onBlur={AddUser}
     variant="standard"
     readOnly />
     <br/>
   
    <TextField 
     sx={{width:'75%', m:1}}
     id="standard-title" 
     label="Order"
     name="title"
     type="title"
     defaultValue={user.Order}
     onBlur={AddUser}
     variant="standard" />
     <br/>

    <TextField 
     sx={{width:'75%', m:1}}
     id="standard-price" 
     label="Price"
     name="price"
     type="price"
     onBlur={AddUser}
     variant="standard" />
     <br/>
   
    <TextField 
     sx={{width:'75%', m:1}}
     id="standard-address" 
     label="Address"
     name="address"
     type="address"
     onBlur={AddUser}
     variant="standard" />
     <br/>
    
     <Button  type='submit' sx={{mt:2}} variant='contained'>Order Now</Button>
      </form>


        </Grid>
      
      
      </Grid>
    </Box>
    </Container>
    );
};

export default UpdateManageAllOrder;