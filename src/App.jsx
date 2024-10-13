import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/contacto';
import Indumentaria from './pages/Indumentaria';
import Zapatillas from './pages/zapatillas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Indumentaria" element={<Indumentaria />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Zapatillas" element={<Zapatillas />} />
      </Routes>
    </Router>
  );
}

export default App;
