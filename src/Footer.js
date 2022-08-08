import React from 'react';
import {FaMapMarkerAlt} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-row">
        <div className="footer-column">
            <h5>Kontakt telefon</h5>
            <p>+381 060-1234567</p>
        </div>
        <div className="footer-column2">
            <h5>Emal adresa</h5>
            <p>nekirestoran@gmail.com</p>
        </div>
        <div className="footer-column">
            <h5>Naša adresa</h5>
            <p>Jove Ilića 42, Voždovac, Beograd</p>
            <a href="https://www.google.com/maps/place/Faculty+of+Organizational+Sciences/@44.7727581,20.4750797,15.78z/data=!4m5!3m4!1s0x0:0xadaf5cff042d3bd0!8m2!3d44.7726817!4d20.4752233" target="_blank"  className='hyperlink-contact'>
            <FaMapMarkerAlt/>Link adrese
            </a>
        </div>
    </div>
    );
}

export default Footer