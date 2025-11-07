import React from 'react';
import './Section.css';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <p>¿Tienes alguna pregunta? Envíanos un mensaje y te responderemos lo antes posible.</p>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo Electrónico" />
        <textarea placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
