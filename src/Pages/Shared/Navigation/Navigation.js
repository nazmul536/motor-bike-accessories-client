import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Navigation = () => {
  const {user,logout}=useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Motor Bike
            </Typography>

          {
            user?.email ?
            <Box>
               <NavLink style={{textDecoration:'none', color:'white'}} to='/exploreproducts'><Button color="inherit">Explore Now</Button></NavLink>

                 <NavLink style={{textDecoration:'none', color:'white'}} to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink>

                 {user.email && <span style={{ color: 'white' }}> {user.displayName} </span>}

             <Button style={{textDecoration:'none',color:'white', fontWeight:600}} onClick={logout} color="inherit">Logout</Button>
            </Box>

            :
            <Box>
              
              <NavLink style={{textDecoration:'none', color:'white'}} to='/exploreproducts'><Button color="inherit">Explore Now</Button></NavLink>
            <NavLink style={{textDecoration:'none', color:'white'}} to='/login'><Button color="inherit">Login</Button></NavLink>
              </Box>
          }
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;