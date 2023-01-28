import React from 'react';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Hintergrund from './components/Hintergrund';
import Kontakt from './components/Kontakt';
import Fomosmain from './components/Fomos-main';
import Fomosexp from './components/Fomos-exp';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/hintergrund" element={<Hintergrund />} /> 
          <Route path="/kontakt" element={<Kontakt />} /> 
          <Route path="/fomos" element={<Fomosmain />} /> 
          <Route path="/fomosexpert" element={<Fomosexp />} /> 
          <Route path="/FAQ" element={<FAQ />} /> 
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
