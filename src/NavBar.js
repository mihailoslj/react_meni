import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar () {
    return(
        <div className="navBar">
        <Link to="/" className='site-title'>Naš restoran</Link>
        <img src="./images/logo-restaurant.png" alt="logo" className="logo-restoraunt" />
        <Link to="/contact" className="contact-page-link">KONTAKT</Link>
      </div>
    );
}



