'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component


const galleryStyle = {
  backgroundColor: 'white',
  padding: '20px',
  fontFamily: 'Cormorant Garamond,serif', // Replace 'Your Artistic Font' with the actual font name
  textAlign: 'center', // Center-align text
  marginBottom: '20px',
};

const subHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center horizontally
  marginBottom: '20px',
};

const subHeaderImageStyle = {
  width: '30px',
  height: 'auto',
  marginRight: '10px',
  marginLeft: '10px',
};

const subHeaderTextStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#bf9444',
};

const titleStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: 'black',
  marginBottom: '20px',
};

const columnContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', // Center horizontally
  gap: '20px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  transition: 'transform 0.3s', // Add a transition for smooth transformation
  cursor: 'pointer', // Add a pointer cursor for interaction
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark transparent background
  opacity: 0, // Initially invisible
  transition: 'opacity 0.3s', // Add a transition for opacity change
};

const imageUrls = [
  'https://g.foolcdn.com/editorial/images/539317/chef-food-service-us-foods-getty.jpeg',
  'https://fthmb.tqn.com/yIJmxh2ugPYiPIC2Ub45y1k1iKA=/3870x2575/filters:fill(auto,1)/chef-56a0f2485f9b58eba4b571f5.jpg',
  'https://g.foolcdn.com/editorial/images/539317/chef-food-service-us-foods-getty.jpeg',
  // Add more image URLs here
];

function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const images = container.querySelectorAll('.gallery-image');

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();

      images.forEach((image, index) => {
        const imageRect = image.getBoundingClientRect();

        // Check if the image is in the viewport and hovered over
        if (
          imageRect.top >= rect.top &&
          imageRect.bottom <= rect.bottom &&
          hoveredIndex === index
        ) {
          image.style.transform = 'scale(1.1)';
        } else {
          image.style.transform = 'scale(1)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hoveredIndex]);

  return (
    <div style={galleryStyle} ref={containerRef}>
      <div style={subHeaderStyle}>
        <Image
          src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          alt="Sub Header Image"
          style={subHeaderImageStyle}
          width={30} // Set width and height for the Image component
          height={30}
        />
        <span style={subHeaderTextStyle}>Gallery Stores</span>
        <Image
          src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          alt="Sub Header Image"
          style={subHeaderImageStyle}
          width={30} // Set width and height for the Image component
          height={30}
        />
      </div>
      <h2 style={titleStyle}>Our Special Gallery</h2>
      <div style={columnContainerStyle}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 calc(33.33% - 20px)',
              position: 'relative', // Add position relative to create a stacking context
            }}
          >
            <div
              className={`gallery-overlay ${hoveredIndex === index ? 'visible' : 'hidden'}`}
              style={overlayStyle}
            />
            <Image
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="gallery-image"
              style={imageStyle}
              width={400} // Set width and height for the Image component
              height={300}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
