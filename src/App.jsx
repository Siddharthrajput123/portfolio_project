// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
