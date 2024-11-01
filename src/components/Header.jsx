// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', backgroundColor: '#2d2a32', color: '#ab49de' }}>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '20px', marginLeft: '20px' }}>
        {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
          <li key={item} style={{ position: 'relative', cursor: 'pointer' }}>
            <a 
              href={`#${item.toLowerCase()}`} 
              title={`Go to ${item}`} 
              style={{ color: '#ab49de', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#ab49de'}
            >
              {item}
            </a>
            <div style={{
              content: "''",
              position: 'absolute',
              left: '50%',
              bottom: '-8px',
              width: '0',
              height: '2px',
              backgroundColor: '#ab49de',
              transition: 'width 0.3s ease, left 0.3s ease',
            }} />
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
