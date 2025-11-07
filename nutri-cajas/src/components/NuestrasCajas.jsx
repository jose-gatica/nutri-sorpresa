import React from 'react';
import './Section.css';
import './NuestrasCajas.css';

const NuestrasCajas = () => {
  return (
    <section className="nuestras-cajas">
      <h2>Nuestras Cajas</h2>
      <div className="cajas-container">
        <div className="caja-card">
          <img src="https://via.placeholder.com/300" alt="Caja Explorador" />
          <h3>Caja Explorador</h3>
          <p>Para los pequeños aventureros que aman descubrir nuevos sabores.</p>
        </div>
        <div className="caja-card">
          <img src="https://via.placeholder.com/300" alt="Caja Creativa" />
          <h3>Caja Creativa</h3>
          <p>Para los pequeños artistas que disfrutan creando sus propias recetas.</p>
        </div>
        <div className="caja-card">
          <img src="https://via.placeholder.com/300" alt="Caja Clásica" />
          <h3>Caja Clásica</h3>
          <p>Una selección de los platos favoritos de los niños, en versión saludable.</p>
        </div>
      </div>
    </section>
  );
};

export default NuestrasCajas;
