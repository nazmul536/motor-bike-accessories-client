
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    return (
        <footer class="footer">

        <ul class="row">
         {/* <li>
           <h2 style={{fontSize:'20px'}}>Motor Bike Accessories</h2>
   
           <ul >
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">Home</Link><br/>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">Banner</Link><br/>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">Services</Link><br/>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">Reviews</Link>
           </ul>
   
         </li> */}
   
   
   
         <li>
           <h2 style={{fontSize:'20px'}}>Our Services</h2>
   
           <ul >
            
            <li>Show Details</li>
            <li>Specification</li>
            <li>Rating</li>
           
           </ul>
   
         </li>
          
    
         <li>
         <h2 style={{fontSize:'20px'}}>Address:</h2>
         <p>Azimpur
         <br/>Dhaka-1205</p>
       
            <div >
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <YouTubeIcon/>
            </div>
            
         </li>
   
   
         <div>
   
           <form>
   
           <div class="container">
           <p style={{fontSize:'20px'}}>Subscribe to our Pages</p>
           <TextField
           style={{color:"white", m:2}}
          id="standard-password-input"
          label="Email"
          type="email"
          autoComplete="email"
          variant="standard"
        />
            <TextField
             style={{color:"white", m:2}}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="password"
          variant="standard"
        />
           </div>
   
           <div>
           <Button sx={{width:200}} type='Submit' variant="contained">Submit</Button>

           </div>
   
           </form>
   
         </div>
        </ul>
   
           <p>Copyright © Nazmul Hossain</p>
       </footer>
    );
};

export default Footer;