import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Section.css';
import './Inicio.css';
import ninoCocinando from '../assets/nino-cocinando.jpeg';
import puzzleNinos from '../assets/puzzle_ninos.jpg';
import lecturaNinos from '../assets/lectura_ninos.jpg';

const Inicio = () => {
  return (
    <section className="inicio">
      <div className="inicio-content">
        <h2>¡Comer sano nunca fue tan divertido!</h2>
        <p>Descubre nuestras cajas de alimentos saludables, diseñadas para que los niños aprendan a comer bien mientras juegan y cocinan en familia.</p>
        <Link to="/nuestras-cajas" className="cta-button">Ver Nuestras Cajas</Link>
      </div>
      <div className="inicio-image">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src={ninoCocinando} alt="Niño sonriendo mientras cocina con vegetales frescos" />
          </div>
          <div>
            <img src={puzzleNinos} alt="Niños armando un rompecabezas de frutas" />
          </div>
          <div>
            <img src={lecturaNinos} alt="Niños leyendo un libro sobre alimentos" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Inicio;
