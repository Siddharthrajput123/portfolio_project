// src/components/Home.jsx
import React from 'react';
import backgroundImage from '../assets/student_image.png'; // Adjust this path as necessary

const Home = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain', // Ensure the whole image fits
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh', // Full viewport height
        color: 'white',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start', // Moves the text to the top-left
        textAlign: 'left', // Align text to the left
        overflow: 'hidden',
        backgroundColor: 'black',
        padding: '20px', // Add some padding for space around the text
      }}
    >
      <div style={{ textAlign: 'left' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', '@media (max-width: 768px)': { fontSize: '2rem' } }}>Hello, I'm Siddharth</h1>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', '@media (max-width: 768px)': { fontSize: '1rem' } }}>A Web Developer specialized in MERN stack</p>
      </div>
    </section>
  );
};

export default Home;
