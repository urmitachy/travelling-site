import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import HotelRoom from './components/HotelRoom/HotelRoom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LogIn from './components/LogIn/LogIn';
import Success from './components/Success/Success';

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
     <Router>
     <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/booking/:touristSpot">
          <Booking></Booking>
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/hotelroom/:touristSpot">
            <HotelRoom />
          </PrivateRoute>
          <Route path="/success/:hotelName">
            <Success />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
        </UserContext.Provider>
    
  );
}

export default App;
