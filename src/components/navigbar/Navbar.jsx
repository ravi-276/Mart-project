import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar1.css';
import logo from '../assets/banner/shope.jpg';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [Menu,setMenu]=useState("Home");
    const { cartCount } = useCart()
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>GROCERIES..!</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration :'none'}} to='/'>Home</Link>{Menu=="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("vegetables")}}><Link style={{textDecoration :'none'}} to='/vegetables'>vegetables</Link>{Menu=="vegetables"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("fruits")}}><Link style={{textDecoration :'none'}} to='/fruits'>fruits</Link>{Menu=="fruits"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("snacks")}}><Link style={{textDecoration :'none'}} to='/snacks'>snacks</Link>{Menu=="snacks"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("soaps")}}><Link style={{textDecoration :'none'}} to='/soaps'>soaps</Link>{Menu=="soaps"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("detergents")}}><Link style={{textDecoration :'none'}} to='detergents'>detergents</Link>{Menu=="detergents"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link style={{textDecoration :'none'}} to='/cart'><p className="cart">Cart</p></Link>
        <div className="nav-car-count">{cartCount}</div>
      </div>
    </div>
  );
};

export default Navbar;
