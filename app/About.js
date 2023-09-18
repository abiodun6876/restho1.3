import React from 'react';
import Image from 'next/image'; // Import the Image component
import './AboutUs.css'; // Import your CSS file for styling

function AboutUs() {
  const titleStyle2 = {
    fontSize: '28px',
    fontWeight: 'bold',
    fontFamily: 'Cormorant Garamond,serif',
    color: 'black',
    marginBottom: '10px',
    transition: 'color 0.3s', // Added transition
  };

  const descriptionStyle = {
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
    color: '#bf9444',
    marginBottom: '20px',
    transition: 'color 0.3s', // Added transition
  };

  const subHeaderImageStyle = {
    width: '30px',
    height: 'auto',
    marginRight: '10px',
    marginLeft: '10px',
  };

  return (
    <div className="about-us-container">
      <div className="about-us-banner"></div>
      <div className="about-us-content">
        <div className="about-us-text">
          <h2 style={titleStyle2}>About Us</h2>
          <h3 style={descriptionStyle}>Come to Our Restaurant, Ready Your Food.</h3>
          <p>
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularized in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
        <div className="about-us-icons">
          <div className="about-icon">
            <Image
              src="https://restho-nextjs.vercel.app/assets/images/icon/h2-about1.svg"
              alt="Experties Chef"
              width={50} // Set width and height for the Image component
              height={50}
            />
            <p>Experties Chef</p>
            <p>We serve different types of fresh food.</p>
          </div>
          <div className="about-icon">
            <Image
              src="https://restho-nextjs.vercel.app/assets/images/icon/h2-about2.svg"
              alt="Pure Fresh Food"
              width={50} // Set width and height for the Image component
              height={50}
            />
            <p>Pure Fresh Food</p>
            <p>We serve different types of fresh food.</p>
          </div>
        </div>
      </div>
      <div className="about-us-image-row">
        <Image
          src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img1.png"
          alt="h2-about-img1"
          width={250} // Set width and height for the Image component
          height={250}
        />
        <Image
          src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img2.png"
          alt="h2-about-img2"
          width={250} // Set width and height for the Image component
          height={250}
        />
      </div>
      <div className="about-us-image-row">
        <Image
          src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img3.png"
          alt="h2-about-img3"
          width={250} // Set width and height for the Image component
          height={250}
        />
        <Image
          src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img4.png"
          alt="h2-about-img4"
          width={250} // Set width and height for the Image component
          height={250}
        />
      </div>
      <div className="read-more">
        <p>Discover More</p>
      </div>
    </div>
  );
}

export default AboutUs;
