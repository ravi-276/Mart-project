import React from 'react';
import './App.css';
import Navbar from './components/navigbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import shopcategorey from './pages/shopcategorey';
import product from './pages/product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/footer';
import Content from './components/content/Content';
 import Detergents from './pages/Detergents';
import Fruits from './pages/fruits';
import Snacks from './pages/Snacks';
import Soaps from './pages/Soaps';
import Vegetables from './pages/Vegetables';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vegetables" element={<Vegetables/>} />
        <Route path="/fruits" element={<Fruits/>} />
        <Route path="/snacks" element={<Snacks/>} />
        <Route path="/soaps" element={<Soaps/>} />
        <Route path="/detergents" element={<Detergents/>} />
        <Route path="/product/:productId" element={<product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Content/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;



