// src/components/Portfolio.jsx
import React from 'react';
import Header from './Header';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section" style={{ backgroundColor: 'black', color: 'black', padding: '20px' }}>
      <Header />
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>Projects</h2>
      <div className="portfolio-container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div className="portfolio-card" style={{ backgroundColor: 'white', padding: '20px', width: '45%', height: '300px', margin: '10px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'left' }}>
          <h3 style={{ color: 'black', fontSize: '1.5rem', fontWeight: 'bold' }}>Global Real-Time Data Dashboard</h3>
          <p style={{ color: 'black' }}>Tech Stack: React, MUI, Redux, Nivo, Node.js, MongoDB</p>
          <p style={{ color: 'black' }}>Created an intuitive user interface with advanced data visualization and seamless state management. Implemented a robust backend for efficient data storage and API handling.</p>
          <a href="https://admin-frontend-szur.onrender.com" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>View Project</a>
        </div>
        <div className="portfolio-card" style={{ backgroundColor: 'white', padding: '20px', width: '45%', height: '300px', margin: '10px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'left' }}>
          <h3 style={{ color: 'black', fontSize: '1.5rem', fontWeight: 'bold' }}>Weather Forecast Project</h3>
          <p style={{ color: 'black' }}>Built using: HTML, CSS, Tailwind CSS, and JavaScript</p>
          <p style={{ color: 'black' }}>A weather application that provides real-time weather updates and a five-day forecast based on user input or their current location.</p>
          <a href="https://drive.google.com/file/d/1ZkFNtdeab5yMxXrk6FdGNZwd7B8Dq5kE/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
