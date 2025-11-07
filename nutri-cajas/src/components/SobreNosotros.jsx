import React from 'react';
import './Section.css';
import './SobreNosotros.css';
import saraImg from '../assets/sara.jpeg';
import franImg from '../assets/fran.jpeg';
import vanessaImg from '../assets/vanessa.jpeg';

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros">
      <div className="sobre-nosotros-image">
        <div className="team-photos">
          <div className="team-photo-wrapper sara">
            <img src={saraImg} alt="Sara, co-fundadora" className="team-photo" id="sara-photo" />
          </div>
          <div className="team-photo-wrapper fran">
            <img src={franImg} alt="Fran, co-fundador" className="team-photo" />
          </div>
          <div className="team-photo-wrapper vanessa">
            <img src={vanessaImg} alt="Vanessa, co-fundadora" className="team-photo" />
          </div>
        </div>
      </div>
      <div className="sobre-nosotros-content">
        <h2>Nuestra Misión</h2>
        <p>En Nutri-Familia, creemos que la alimentación saludable debe ser una aventura emocionante para los niños. Nuestra misión es inspirar hábitos alimenticios positivos desde una edad temprana, a través de cajas que combinan nutrición, juego y creatividad. Queremos que cada comida sea una oportunidad para aprender, compartir y crecer en familia.</p>
      </div>
    </section>
  );
};

export default SobreNosotros;
