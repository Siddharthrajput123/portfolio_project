
import React from 'react';
import { FaLinkedin, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import favicons

const Footer = () => {
  return (
    <section id="footer" className="footer-section" style={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign: 'center' }}>
      <h2>Contact</h2>
      <p>Feel free to reach out to me through my social media or via email.</p>
      // all icons with links 
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '20px', padding: 0 }}>
        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaLinkedin size={24} /></a></li>
        <li><a href="mailto:your-email@example.com" style={{ color: 'white' }}><FaEnvelope size={24} /></a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaInstagram size={24} /></a></li>
        <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaYoutube size={24} /></a></li>
      </ul>
    </section>
  );
};

export default Footer;

//npm install react-icons