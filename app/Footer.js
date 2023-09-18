import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Our Facilities</h3>
          <ul>
            <li>Private Event</li>
            <li>Best Offer</li>
            <li>Regular Menu</li>
            <li>New Food</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Indian Menu</h3>
          <ul>
            <li>Menu Item</li>
            <li>Special Offer</li>
            <li>Popular Item</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Menu Item</h3>
          <ul>
            <li>Menu Item</li>
            <li>Special Offer</li>
            <li>Popular Item</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Established . 2022</h3>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="address-info">
          <p>Address Info</p>
          <p>Phone: +880-1776-766-767</p>
          <p>Email: info@example.com</p>
          <p>Fax ID: +99-75667-786</p>
          <p>Location: Mirpur DOHS, House-167/170, Road-02 Avenue-01.</p>
        </div>
        <div className="copyright">
          @Copyright by Egenslab-2023, All Right Reserved.{' '}
          <span>
            Privacy & Policy | Terms and Conditions
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
