import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';

import Aboutme from './pages/Aboutme';
import Certifications from './pages/Certifications';
import Contactme from './pages/Contactme';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <div className="App">
  
    <Navbar/>
    <Routes>
      <Route path="/Aboutme" element={<Aboutme/>}/>
      <Route path="/Certifications" element={<Certifications/>}/>
      <Route path="/Contactme" element={<Contactme/>}/>
      <Route path="/Qualifications" element={<Qualifications/>}/>
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Hobbies" element={<Hobbies/>}/>
    </Routes>

    </div>  
  );

}

export default App;
