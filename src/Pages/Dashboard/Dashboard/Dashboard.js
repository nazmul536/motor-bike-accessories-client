import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, ListItemButton  } from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';
import Button from '@mui/material/Button';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaymentIcon from '@mui/icons-material/Payment';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ReorderIcon from '@mui/icons-material/Reorder';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Tooltip from '@mui/material/Tooltip';





import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MyOrders from '../MyOrders/MyOrders';
import AddReviews from '../AddReviews/AddReviews';
import Pay from '../Pay/Pay';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import useAuth from './../../../hooks/useAuth';
import nazmul from '../../../Images/nazmul.jpg'


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function DashBoard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin,user, logout}=useAuth();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Tooltip title="Open settings">
              <IconButton sx={{ p: 1.5, m:'0 auto' }}>
                <Avatar alt="Remy Sharp" src={nazmul} />
              </IconButton>
            </Tooltip>
      <Divider />
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>

        <ListItem disablePadding>
           <ListItemButton>
             <DashboardIcon>
               <InboxIcon />
             </DashboardIcon>
             <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/dashboardhome`}><Button color='inherit'>DashBoard</Button></Link>
           </ListItemButton>
         </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <PaymentIcon>
                <InboxIcon />
              </PaymentIcon>
              <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/pay`}><Button color='inherit'>Pay</Button></Link>
            </ListItemButton>
          </ListItem> 


          <ListItem disablePadding>
           <ListItemButton>
             <AgricultureIcon>
               <InboxIcon />
             </AgricultureIcon>
             <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/myOrders`}><Button color='inherit'>My Orders</Button></Link>
           </ListItemButton>
         </ListItem>


         <ListItem disablePadding>
          <ListItemButton>
            <ReviewsIcon>
              <InboxIcon />
            </ReviewsIcon>
            <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/reviews`}><Button color='inherit'>Reviews</Button></Link>
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
            <ListItemButton>
              <ReorderIcon>
                <InboxIcon />
              </ReorderIcon>
              <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/ManageAllOrder`}><Button color='inherit'>Manage Orders</Button></Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <AddPhotoAlternateIcon>
                <InboxIcon />
              </AddPhotoAlternateIcon>
              <Link  style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/addProduct`}><Button color='inherit'>Add Products</Button></Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <SupervisorAccountIcon>
                <InboxIcon />
              </SupervisorAccountIcon>
              <Link  style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/makeAdmin`}><Button color='inherit'>Make Admin</Button></Link>
            </ListItemButton>
          </ListItem>
         
          <ListItem disablePadding>
            <ListItemButton>
              <SupervisorAccountIcon>
                <InboxIcon />
              </SupervisorAccountIcon>
              <Link  style={{textDecoration:'none', color:'gray', fontWeight:700}} to={`${url}/manageProduct`}><Button color='inherit'>Manage Products</Button></Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
         
              <Link style={{textDecoration:'none', color:'gray', fontWeight:700}} onClick={logout}  to={`${url}`}><Button color='inherit'>Logout</Button></Link>
            </ListItemButton>
          </ListItem>

          
        </List>
      </nav>
    </Box>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       
          <Switch>

              <Route exact path={`${path}/dashboardhome`}>
                <DashBoardHome></DashBoardHome>
              </Route>


              <Route path={`${path}/myOrders`}>
                <MyOrders></MyOrders>
              </Route>
             

              <Route path={`${path}/reviews`}>
               <AddReviews></AddReviews>
              </Route>
              
              <Route path={`${path}/pay`}>
               <Pay></Pay>
              </Route>
          
          
              <Route path={`${path}/ManageAllOrder`}>
               <ManageAllOrder></ManageAllOrder>
              </Route>
            
            
              <Route path={`${path}/addProduct`}>
               <AddProduct></AddProduct>
              </Route>
            

              <Route path={`${path}/manageProduct`}>
               <ManageProducts></ManageProducts>
              </Route>
           
           
              <Route path={`${path}/makeAdmin`}>
               <MakeAdmin></MakeAdmin>
              </Route>



          </Switch>


      </Box>
    </Box>
  );
}
