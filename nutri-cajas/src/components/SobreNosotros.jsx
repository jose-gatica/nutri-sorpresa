import React from 'react';
import './Section.css';
import './SobreNosotros.css';

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros">
      <div className="sobre-nosotros-image">
        <img src="https://via.placeholder.com/500" alt="Equipo de Nutri-Cajas" />
      </div>
      <div className="sobre-nosotros-content">
        <h2>Nuestra Misión</h2>
        <p>En Nutri-Cajas, creemos que la alimentación saludable debe ser una aventura emocionante para los niños. Nuestra misión es inspirar hábitos alimenticios positivos desde una edad temprana, a través de cajas que combinan nutrición, juego y creatividad. Queremos que cada comida sea una oportunidad para aprender, compartir y crecer en familia.</p>
      </div>
    </section>
  );
};

export default SobreNosotros;
