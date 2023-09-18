'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component from next/image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const cardStyle = {
  backgroundColor: 'white',
  padding: '20px',
  fontFamily: 'Cormorant Garamond,serif',
  textAlign: 'center',
  marginBottom: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative', // For stacking context
};

const subHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  justifyContent: 'center',
  gap: '20px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  transition: 'transform 0.3s',
  cursor: 'pointer',
  borderRadius: '10px',
  border: '2px solid white', // White outline
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  opacity: 0,
  transition: 'opacity 0.3s',
};

const socialMediaStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const socialIconStyle = {
  fontSize: '24px',
  color: 'white',
  margin: '0 5px',
};

const imageUrls = [
  {
    url: 'https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen1.png',
    name: 'Mr. Willium Jhon',
    title: 'Chef of Head',
  },
  {
    url: 'https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen2.png',
    name: 'Mile Woatson',
    title: 'Chef of Head',
  },
  {
    url: 'https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen3.png',
    name: 'Mr. Robert Jhon',
    title: 'Chef of Head',
  },
  // Add more image URLs here
];

function Teams() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const images = container.querySelectorAll('.gallery-image');

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();

      images.forEach((image, index) => {
        const imageRect = image.getBoundingClientRect();

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
    <div style={cardStyle}>
      <div style={subHeaderStyle}>
        <Image
          src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          alt="Sub Header Image"
          style={subHeaderImageStyle}
          width={30} // Set the desired width
          height={30} // Set the desired height
        />
        <span style={subHeaderTextStyle}>Our Expertiess</span>
        <Image
          src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          alt="Sub Header Image"
          style={subHeaderImageStyle}
          width={30} // Set the desired width
          height={30} // Set the desired height
        />
      </div>
      <h2 style={titleStyle}>Restho&apos;s Best Chef</h2>
      <div style={columnContainerStyle} ref={containerRef}>
        {imageUrls.map((item, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 calc(33.33% - 20px)',
              position: 'relative',
            }}
          >
            <div
              className={`gallery-overlay ${hoveredIndex === index ? 'visible' : 'hidden'}`}
              style={overlayStyle}
            >
              <div style={socialMediaStyle}>
                <FontAwesomeIcon icon={faFacebook} style={socialIconStyle} />
                <FontAwesomeIcon icon={faTwitter} style={socialIconStyle} />
                <FontAwesomeIcon icon={faInstagram} style={socialIconStyle} />
              </div>
            </div>
            <Image
              src={item.url}
              alt={`Image ${index + 1}`}
              className="gallery-image"
              style={imageStyle}
              width={250} // Set the desired width
              height={250} // Set the desired height
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
            <div style={{ textAlign: 'center', marginTop: '10px',marginRight: '10px',marginLeft: '10px', fontFamily: 'Cormorant Garamond,serif', }}>
              <p style={{ textAlign: 'center', marginTop: '10px',marginRight: '10px',marginLeft: '10px', fontFamily: 'Cormorant Garamond,serif', }}>{item.name}</p>
              <p style={{ textAlign: 'center', marginTop: '10px',marginRight: '10px',marginLeft: '10px', fontFamily: 'Cormorant Garamond,serif', }}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
