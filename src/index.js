// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BackgroundImage from './components/BackgroundImage';
import { CssBaseline } from '@mui/material';
import Projects from './components/Projects';
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BackgroundImage imageUrl={`${process.env.PUBLIC_URL}/assets/5unsplash.jpg`}>
        <CssBaseline />
        <Header />
        <div style={{ marginTop: '20px', marginBottom: '20px' }}> {/* Add margin to create space between header and main content */}</div>

        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/" element={<Main/> } />
          <Route path="/" element={<Main/> } />

        </Routes>
      
      </BackgroundImage>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
