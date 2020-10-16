import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import AddOrder from './Components/Dashboard/AddOrder/AddOrder';
import Review from './Components/Dashboard/Review/Review';
import OrderSummary from './Components/Dashboard/OrderSummary/OrderSummary';
import ErrorPage from './Components/ErrorPage/ErrorPage';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin/servicelist">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/orderSummary">
            <OrderSummary />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <AddOrder />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
