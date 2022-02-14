import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import useAuth from './../../../hooks/useAuth';


const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    const [success, setSuccess]=useState(false);

    const handleOnBlur=e=>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit=e=>{
        const user={email};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data)
                setEmail('');
                setSuccess(true);
            }
        })

        e.preventDefault();
    }
    return (
        <div>
        <h1>Make An Admin</h1>     
        <form  onSubmit={handleAdminSubmit} >
        <TextField 
        sx={{width:'50%'}}
        label="Email"
        type="email"
        onBlur={handleOnBlur}
        variant="standard" 
        />
        
        <Button type='submit' variant="contained">Make Admin</Button>
 
        </form>
        {success && <Alert severity="success">Make admin Successfully</Alert>}
         </div>
    );
};

export default MakeAdmin;