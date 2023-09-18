'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component from next/image
import './NewItemSlider.css';

const newItemData = [
  {
    title: 'Prawn Fried',
    description: 'It is a long established fact that a reader will be distracted.',
    price: '$32',
    image: 'https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items12.png',
  },
  {
    title: 'Prawn with Noodles',
    description: 'It is a long established fact that a reader will be distracted.',
    price: '$32',
    image: 'https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items13.png',
  },
];

function NewItemSlider() {
  const [currentItem, setCurrentItem] = useState(0);

  const sliderItemStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s', // Added transition
    opacity: '0.7', // Initial opacity
    margin: '0 10px',
  };

  const activeSliderItemStyle = {
    transform: 'scale(1)', // Scale to 100% on active item
    opacity: '1', // Full opacity on active item
  };

  const responsiveSliderItemStyle = {
    flex: '0 0 calc(100% - 20px)', // Set card width to 100% on mobile
    margin: '10px 0', // Add margin between cards on mobile
  };

  const nextItem = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % newItemData.length);
  };

  const prevItem = () => {
    setCurrentItem((prevItem) => (prevItem - 1 + newItemData.length) % newItemData.length);
  };

  const subHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    color: 'white',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '20px',
    color: 'white',
  };

  // Rest of your component code

  return (
    <div className="new-item-slider">
         <div className="itembanner">
        <div className="itemheader">
          <h4 style={subHeaderStyle}>Our New Items</h4>
          <h1 style={titleStyle}>Restho New Item List</h1>
          <h4 className="description">
            Various versions have evolved over the years, sometimes on purpose.
          </h4>
        </div>
      {/* ... */}
      <div className="slider-content">
        {newItemData.map((item, index) => (
          <div
            key={index}
            className="slider-item"
            style={{
              ...sliderItemStyle,
              ...(index === currentItem ? activeSliderItemStyle : {}),
              // Apply responsive styles for mobile
              ...(window.innerWidth <= 768 ? responsiveSliderItemStyle : {}),
            }}
          >
            <div className="item-info">
              <div className="rotate-square">
                {/* Replace <img> with <Image> */}
                <Image
                  src={item.image}
                  alt={item.title}
                  className="item-image"
                  width={250} // Set the desired width
                  height={250} // Set the desired height
                />
                <div className="item-details">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ... */}
    </div>
    </div>
  );
}

export default NewItemSlider;
