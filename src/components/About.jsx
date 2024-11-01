
import React from 'react';
import backgroundImage from '../assets/about_bg.jpg'; 
import './About.css';
import Header from './Header'; 

const About = () => {
  return (
    <>
      <Header />
      <section
        id="about"  // css properties for image
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh', 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black overlay
        }}
      >
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.3)', 
          padding: '20px', 
          borderRadius: '10px', 
          backdropFilter: 'blur(1px)' // blur effect
        }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: 'black' }}>About Me</h1>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '40px', color: 'black' }}>A passionate Frontend Developer with expertise in the MERN stack and Python.</p>
            /* this is for the skills and bar  */
          <div className="skills">
            <div className="skill-bar">  
              <span className="skill" style={{ width: '90%', color: 'black', fontWeight: 'bold' }}>CSS</span> 
            </div>
            <div className="skill-bar">
              <span className="skill" style={{ width: '85%', color: 'black', fontWeight: 'bold' }}>JavaScript</span>
            </div>
            <div className="skill-bar">
              <span className="skill" style={{ width: '80%', color: 'black', fontWeight: 'bold' }}>React</span>
            </div>
            <div className="skill-bar">
              <span className="skill" style={{ width: '70%', color: 'black', fontWeight: 'bold' }}>Express</span>
            </div>
            <div className="skill-bar">
              <span className="skill" style={{ width: '75%', color: 'black', fontWeight: 'bold' }}>MongoDB</span>
            </div>
            <div className="skill-bar">
              <span className="skill" style={{ width: '65%', color: 'black', fontWeight: 'bold' }}>Python</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
