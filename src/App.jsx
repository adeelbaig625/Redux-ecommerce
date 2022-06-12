import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Login from './pages/Login'
import Register from './pages/Register'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function App() {
 return <Router>
     <Switch>
         <Route exact path="/">
            <Home/>
         </Route>
         <Route path="/cart">
            <Cart/>
         </Route>
         <Route path="/products/:category">
            <ProductList/>
         </Route>
         <Route path="/products/:category">
            <Product/>
         </Route>
         <Route path="/products/:id">
            <Product/>
         </Route>
         <Route path="/login">
            <Login/>
         </Route>
         <Route path="/register">
            <Register/>
         </Route>
     </Switch>
 </Router>
}

export default App;
