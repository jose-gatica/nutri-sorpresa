import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import SobreNosotros from './components/SobreNosotros';
import NuestrasCajas from './components/NuestrasCajas';
import Blog from './components/Blog';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/nuestras-cajas" element={<NuestrasCajas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
