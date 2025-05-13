import React from 'react';
import './Footer.css';
import foot_logo from '../assets/footerimg/footimg.jpg';
import insta from '../assets/footerimg/insta.png';
import whatsapp from '../assets/footerimg/whatsapp.png';

const Footer = () => {
  return (
  <div>
    <div className="footer">
      <div className="footer-logo">
        <img src={foot_logo} alt="Shop Logo" />
        <p >Shop For Unlimited</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
         <button><img src={insta} alt="Instagram" /></button> 
        </div>
        <div className="footer-icons-container">
         <button><img src={whatsapp} alt="WhatsApp" /></button> 
        </div>
      </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
