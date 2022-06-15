import React from 'react';

import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Login from './pages/Login'
import Register from './pages/Register'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function App() {
 return <Router>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/products/:category" element={<ProductList/>}/>
         <Route path="/product/:id"element={ <Product/>}/>
         <Route path="/login" element={<Login/>}/> 
         <Route path="/register" element={<Register/>}/>
        
     </Routes>
 </Router>
}

export default App;
