// import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

// import instagram_icon from '..Assets/instagram_icon.png'
const Footer = () => {
    const whatsappLink = "https://wa.me/qr/3RLLWX6XQQ7KD1";
    const instaLink = "https://www.instagram.com/tatheer_099?igsh=MXRiZzFsN3VlaHIxZg==";
    const facebookLink = "https://www.facebook.com/share/12EJgL8A9h2/";
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>CartNest</p>
            </div>
            <ul className="footer-links">
                <li>   <Link to="company">Company</Link> </li>
                <li>   <Link to="office">Offices</Link> </li>
                <li>   <Link to="about">About</Link> </li>
                <li>   <Link to="contact">Contact</Link> </li>
            </ul>
            <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={28} color="#4267B2" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href={instaLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} color="#C13584" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={28} color="#25D366" />
          </a>
        </div>
      </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserverd</p>
            </div>
        </div>
    )
}

export default Footer