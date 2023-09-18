import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

const bannerStyle = {
  backgroundImage: 'url("https://i.pinimg.com/originals/08/9b/ce/089bce0b11f9a94c850061e14843f511.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
  borderRadius: '10px',
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center the form horizontally
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center the input fields horizontally
};

const inputStyle = {
  width: '100%',
  maxWidth: '400px', // Adjust the maximum width as needed
  padding: '10px',
  marginBottom: '10px',
  border: '2px solid white', // Set the outline color
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
  color: 'white', // Text 
  flexDirection: 'colum',
};

const buttonStyle = {
  backgroundColor: '#bf9444',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
};

const headerStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '20px',
};

const subHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  color: 'white',
  fontWeight: 'bold',
  fontFamily: 'Cormorant Garamond, serif',
};

const titleStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '20px',
  fontFamily: 'Cormorant Garamond, serif',
};



function ContactUs() {
  return (
    <div style={bannerStyle}>
      <div style={subHeaderStyle}>
        <Image
          src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          alt="Sub Header Image"
          width={30} // Set the desired width
          height={30} // Set the desired height
        />
        <span>Online Reserve</span>
        <Image
          src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          alt="Sub Header Image"
          width={30} // Set the desired width
          height={30} // Set the desired height
        />
      </div>
      <h2 style={titleStyle}>For Online Reservation</h2>
      <div style={inputContainerStyle}>
        {/* Input fields go here */}
        <input
          type="text"
          placeholder="Name"
          style={inputStyle}
        />
        <input
          type="tel"
          placeholder="Phone"
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="People"
          style={inputStyle}
        />
        <input
          type="datetime-local"
          style={inputStyle}
        />
        <button style={buttonStyle}>Reserve Now</button>
      </div>
    </div>
  );
}

export default ContactUs;
