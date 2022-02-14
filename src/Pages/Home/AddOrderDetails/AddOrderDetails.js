import React, {useState,useEffect, useRef} from 'react';
import { Container,TextField,Button } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';



const AddOrderDetails = () => {
    const [newDetails,setNewDetails]=useState({})
    const {id} = useParams()
    const [addUser,setAddUser]=useState({})
    const history=useHistory();
    const {user}=useAuth();
    // const nameRef=useRef()
    // const emailRef=useRef()
    // const titleRef=useRef()

    const [addOrderDetails, setAddOrderDetails] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/products')
          .then(res => res.json())
          .then(data => { 
            setAddOrderDetails(data.products)
          // console.log(data)
          })
  }, [])
  // console.log(id)
  


    useEffect(() => {
        const mathch=addOrderDetails?.find(detail => detail?._id==id)
        setNewDetails(mathch)
    },[addOrderDetails])

  
    const AddUser=e=>{
      const field=e.target.name;
      const value=e.target.value;
      const newAddUser={...addUser}
      newAddUser[field]=value;
      console.log(newAddUser)
      setAddUser(newAddUser);
    }
  
    const handleAddUser=e=>{
    
      const user={addUser}
    
      
      fetch('http://localhost:5000/addUser',{
        method:'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
    })
      .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setAddUser('')
      })
         e.preventDefault();
      }
  

    return (
        <div>
            <Navigation></Navigation>
            <Container>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={6} md={6} sm={12}>
          <h1>Details</h1>
         
          <img src={newDetails?.img} alt="" />
         
          <h4> {newDetails?.name}</h4>
         
          
          <p>{newDetails?.description}</p>
        </Grid>


        <Grid item xs={6} md={6} sm={12}>
        <Typography sx={{fontWeight:600, mt:5}} variant="h4" gutterBottom>
      Add a Order
     </Typography>
    
     <form onSubmit={handleAddUser} >
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
        </div>
    );
};

export default AddOrderDetails;