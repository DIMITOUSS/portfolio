// index.js or App.js
import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs'
import './index.css';


// Create a root.

createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <Router>
        <CssBaseline />
        <Header />
        <div style={{ marginTop: '20px', marginBottom: '20px' }}> {/* Add margin to create space between header and main content */}</div>

        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />


          <Route path="/" element={<Main/> } />
          <Route path="/" element={<Main/> } />

        </Routes>
      
     
      <Footer />
    </Router>
  </React.StrictMode>,
);
