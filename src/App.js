import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard'
import ExploreProducts from "./Pages/ExploreProducts/ExploreProducts/ExploreProducts";
import AddOrderDetails from "./Pages/Home/AddOrderDetails/AddOrderDetails";
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import UpdateManageAllOrder from "./Pages/Dashboard/UpdateManageAllOrder/UpdateManageAllOrder";

function App() {
  return (
    <div className="App">
      
     <AuthProvider>
     <Router>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route path='/home'>
          <Home></Home>
          </Route>
          <Route path='/exploreproducts'>
          <ExploreProducts></ExploreProducts>
          </Route>
          <Route path='/updateManageAllOrder/:id'>
         <UpdateManageAllOrder/>
          </Route>
          <PrivateRoute path='/addOrderDetails/:id'>
          <AddOrderDetails></AddOrderDetails>
          </PrivateRoute>
          <Route path='/login'>
         <Login></Login>
          </Route>
          <Route path='/register'>
        <Register></Register>
          </Route>
          <PrivateRoute path='/dashboard'>
       <Dashboard></Dashboard>
          </PrivateRoute>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
