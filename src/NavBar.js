import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar () {
    return(
        <div className="navBar">
        <Link to="/" className='site-title'>Naš restoran</Link>
        <Link to="/contact" className="contact-page-link">Kontakt</Link>
      </div>
    );
}



