import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/contacto';
import Indumentaria from './pages/Indumentaria';
import Zapatillas from './pages/zapatillas';
import ItemDetail from './components/itemDetail';
import { useEffect, useState } from 'react';
import { loadCDNs } from './js/cdnLoader.js';
import Layout from './components/layout.jsx';
import { CartProvider } from './config/CartContext.jsx';
import Checkout from './components/finish'

function App() {

  useEffect(() => {
    loadCDNs();
  }, []);

  return (
    <CartProvider>            
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Indumentaria" element={<Indumentaria />} />
            <Route path="/QuienesSomos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/Zapatillas" element={<Zapatillas />} />
            <Route path="/item/:idSection/:idItem" element={<ItemDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
