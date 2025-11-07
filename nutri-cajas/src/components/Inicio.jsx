import React from 'react';
import './Section.css';
import './Inicio.css';

const Inicio = () => {
  return (
    <section className="inicio">
      <div className="inicio-content">
        <h2>¡Comer sano nunca fue tan divertido!</h2>
        <p>Descubre nuestras cajas de alimentos saludables, diseñadas para que los niños aprendan a comer bien mientras juegan y cocinan en familia.</p>
        <button className="cta-button">Ver Nuestras Cajas</button>
      </div>
      <div className="inicio-image">
        <img src="https://via.placeholder.com/500" alt="Niño comiendo saludable" />
      </div>
    </section>
  );
};

export default Inicio;
