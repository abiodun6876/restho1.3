'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaTimes } from 'react-icons/fa';
import { faHome, faChevronDown, faBars as faBarsSolid, faTimes as faTimesSolid } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Import the Image component from next/image
import './Navbar.css'; // Import your CSS file for styling
import './globals.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // Define state variables for the dropdown menus
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  // Function to toggle the "Pages" dropdown menu
  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  // Function to toggle the "Blog" dropdown menu
  const toggleBlogDropdown = () => {
    setIsBlogDropdownOpen(!isBlogDropdownOpen);
  };

  return (
    <div className="header2">
      <div className="container">
        <h1 className="logo">
          <Image
            src="https://restho-nextjs.vercel.app/assets/images/header2-logo.svg"
            alt="Company Logo"
            width={200} // Set the desired width
            height={100} // Set the desired height
          />
        </h1>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li
            onMouseEnter={togglePagesDropdown}
            onMouseLeave={togglePagesDropdown}
          >
            <a href="#">
              Pages <FontAwesomeIcon icon={faChevronDown} />
            </a>
            {/* "Pages" dropdown content */}
            {isPagesDropdownOpen && (
              <ul className="dropdown-content">
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <a href="#">Page 3</a>
                </li>
                {/* Add more pages as needed */}
              </ul>
            )}
          </li>

          <li
            onMouseEnter={toggleBlogDropdown}
            onMouseLeave={toggleBlogDropdown}
          >
            <a href="#">
              Blog <FontAwesomeIcon icon={faChevronDown} />
            </a>
            {/* "Blog" dropdown content */}
            {isBlogDropdownOpen && (
              <ul className="dropdown-content">
                <li>
                  <a href="#">Blog Post 1</a>
                </li>
                <li>
                  <a href="#">Blog Post 2</a>
                </li>
                <li>
                  <a href="#">Blog Post 3</a>
                </li>
                {/* Add more blog posts as needed */}
              </ul>
            )}
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
          <li className="FindReservation">
            <a href="#">Find Reservation</a>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#333' }} />
          ) : (
            <FaBars size={20} style={{ color: '#333' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
