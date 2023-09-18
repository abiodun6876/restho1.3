'uses client'
import Image from 'next/image'


import React, { useState, useEffect } from 'react';
const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Change to column layout on mobile
    alignItems: 'center', // Center items horizontally
    textAlign: 'center', // Center text
  };
  
  const textContainerStyle = {
    padding: '20px',
    fontFamily: 'Cormorant Garamond",serif',
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out', // Added transitions
  };
  
  const titleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    
    color: '#bf9444',
    marginBottom: '10px',
    transition: 'color 0.3s', // Added transition
  };
  
  const titleStyle2 = {
    fontSize: '48px',
    fontWeight: 'bold',
    fontFamily: 'Cormorant Garamond",serif',
    color: 'white',
    marginBottom: '10px',
    transition: 'color 0.3s', // Added transition
  };
  
  const descriptionStyle = {
    fontSize: '14px',
    fontFamily: 'Cormorant Garamond",serif',
    color: '#bf9444',
    marginBottom: '20px',
    transition: 'color 0.3s', // Added transition
  };
  
  const buttonStyle = {
    backgroundColor: '#212529',
    color: '#bf9444',
    border: '2px solid #bf9444',
    borderRadius: '20px',
    padding: '8px 16px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '10px',
    transition: 'color 0.3s', // Added transition
  };
  
 

const imageUrls = [
  'https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img2.png',
  'https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img2.png',
  'https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img222.png',
  'https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img44.png',
];

function Welcome() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  
  

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle} className="text1">
    
        <h4 style={titleStyle}>welcome  To Restho</h4>
      
        <h2 className="head" style={titleStyle2}>
          Find Your Best Healthy
        </h2>
        <h2 className="head" style={titleStyle2}>
          & Tasty Food.
        </h2>
        <h4 style={descriptionStyle}>It is a long established fact that a reader </h4>
        <h4 style={descriptionStyle}>will be
        distracted by the readable content of a page.</h4>
        <a href="#" style={buttonStyle}>
          Discover More
        </a>
      </div>
      <div>
        <div style={{ position: 'relative' }}>
                    <Image
            src={imageUrls[currentImage]}
            alt="Rotating Image"
            width={250}
            height={250}
            style={{
                marginBottom: '10px',
            }}
            />

          {/* Dot dot indication */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
            }}
          >
            {imageUrls.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: index === currentImage ? 'white' : 'gray',
                  borderRadius: '50%',
                  margin: '0 5px',
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
