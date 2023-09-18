'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Blog from './Blog';
import Header from './Header';
import Welcome from './welcome';
import Gallery from './Gallery';
import Teams from './Teams';
import AboutUs from './About';
import NewItemSlider from './NewItemSlider';
import MenuList from './MenuList';
import ContactUs from './ContactUs';
import Footer from './Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate a loading process
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        // Loading complete
        clearInterval(timer);
        setLoading(false);
        setTimeout(() => {
          document.body.classList.add('scroll-up'); // Add the scroll-up class to the body
        }, 100); // Adjust the delay as needed
      }
    }, 45);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [progress]);

  useEffect(() => {
    // Remove the scroll-up class when the component unmounts
    return () => {
      document.body.classList.remove('scroll-up');
    };
  }, []);

  useEffect(() => {
    // Add a scroll bar to the body
    document.body.style.overflowY = 'scroll';
  }, []);

  return (
    <div>
      <div className={`loading-container ${loading ? 'visible' : 'hidden'}`}>
        <div className="loading-text">{loading ? `${progress}%` : ''}</div>
        <Image
          src="/assets/images/header2-logo.svg"
          alt="Loading Logo"
          className="loading-logo"
          width={200} // Set the desired width
          height={200} // Set the desired height
        />
      </div>

      {/* Header start here */}
      <Header />

      {loading ? null : (
        <div>
          {/* Scroll-up transition */}
          <style jsx global>{`
            body.scroll-up {
              animation: scrollUp 0.5s ease-in-out;
              overflow: hidden; /* Prevent scrolling during the transition */
            }

            @keyframes scrollUp {
              0% {
                transform: translateY(100%);
              }
              100% {
                transform: translateY(0);
              }
            }
          `}</style>

          {/* Include the Navbar component */}
          <Navbar />

          <Welcome />

          <AboutUs />

          <Gallery />

          <NewItemSlider />

          <MenuList />

          <Teams />

          <Blog />

          <ContactUs />
          <Footer />
        </div>
      )}
    </div>
  );
}
