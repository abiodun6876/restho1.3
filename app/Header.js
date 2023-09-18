'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';

import React, { useEffect, useState, useRef } from 'react';

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Use useRef to store the mutable value
  const prevScrollPosRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPosRef.current > currentScrollPos && !isHeaderVisible) {
        // User is scrolling up, show the header
        setIsHeaderVisible(true);
      } else if (prevScrollPosRef.current < currentScrollPos && isHeaderVisible) {
        // User is scrolling down, hide the header
        setIsHeaderVisible(false);
      }

      prevScrollPosRef.current = currentScrollPos; // Update the mutable value
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHeaderVisible]);

  return (
    <header className={`header ${isHeaderVisible ? '' : 'hidden'}`}>
      {/* Your header content */}
      
      <div className="left-content" style={{ display: 'flex', flexDirection: 'row', marginLeft: '200px' }}>
        <p style={{ color: '#bf9444' }}>Opening Hour: </p>
        <p style={{ color: 'white' }}>9.00 am to 10.00 pm</p>
      </div>

      {/* Hide these divs on mobile screens */}
      <div className="right-content" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div className="hide">
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icons" style={{ transition: 'color 0.3s', 
            marginRight: '8px', color: '#bf9444', fontSize: '20px' }} />
          </p>
        </div>

        <div className="hide">
          <p style={{ transition: 'color 0.3s', marginLeft: '8px' }}>info@example.com</p>
        </div>
      </div>

      <div className="hide">
        <div className="right-content" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <p>
            <FontAwesomeIcon icon={faMapMarker} className="icons" style={{ transition: 'color 0.3s', marginRight: '8px', color: '#bf9444', fontSize: '20px' }} />
          </p>
          <p style={{ transition: 'color 0.3s', marginLeft: '8px' }}>Road-01, Block-B, West London City</p>
        </div>
      </div>
    
    </header>
  );
};

export default Header;
