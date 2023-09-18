import React from 'react';
import './MenuList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Import the Image component

const menuData = [
  {
    title: 'Lunch',
    price: '$45',
    name: 'Prawn with Noodles',
    description: 'It is a long established fact that a reader will be distracted.',
    image: 'https://restho-nextjs.vercel.app/assets/images/bg/h2-food-item-5.png', // Replace with your image URL
  },
  {
    title: 'Lunch',
    price: '$45',
    name: 'Chicken Leg Fry',
    description: 'It is a long established fact that a reader will be distracted.',
    image: 'https://restho-nextjs.vercel.app/assets/images/bg/h2-food-item-6.png', // Replace with your image URL
  },
  {
    title: 'Lunch',
    price: '$45',
    name: 'Golden Coffee',
    description: 'It is a long established fact that a reader will be distracted.',
    image: 'https://restho-nextjs.vercel.app/assets/images/bg/h2-food-item-2.png', // Replace with your image URL
  },
];

function MenuList() {

    const NewItemSlide = {
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



  return (

    <div style={NewItemSlide} >
    <div style={subHeaderStyle}>
      <Image
        src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
        alt="Sub Header Image"
        style={subHeaderImageStyle}
        width={500} // Set width and height for the Image component
        height={500}
      />
      <span style={subHeaderTextStyle}>Menu List</span>
      <Image
        src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
        alt="Sub Header Image"
        style={subHeaderImageStyle}
        width={500} // Set width and height for the Image component
        height={500}
      />
    </div>
    <h2 style={titleStyle}>Find Your Food Item</h2>
    <br/>
    <a href="#" className="read-more">
          View More <FontAwesomeIcon icon={faArrowRight} />
        </a>
        <div className="menu-list">
        
      
        {menuData.map((item, index) => (
          <div key={index} className="menu-item">
            <Image 
            src={item.image} 
            alt={item.name} 
            width={500} // Set width and height for the Image component
            height={500}
            className="food-item-image" />
            <div className="food-item-details">
              <span className="food-item-title">{item.title}</span>
              <span className="food-item-price">{item.price}</span>
              <h3 className="food-item-name">{item.name}</h3>
              <p className="food-item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>


    <div className="menu-list">
        
      
        {menuData.map((item, index) => (
          <div key={index} className="menu-item">
            <Image 
            src={item.image} 
            alt={item.name} 
            width={500} // Set width and height for the Image component
            height={500}
            className="food-item-image" />
            <div className="food-item-details">
              <span className="food-item-title">{item.title}</span>
              <span className="food-item-price">{item.price}</span>
              <h3 className="food-item-name">{item.name}</h3>
              <p className="food-item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
