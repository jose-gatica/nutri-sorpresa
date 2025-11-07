import React from 'react';
import './Section.css';
import './Blog.css';
import panquequesImg from '../assets/panqueques.jpg';
import comidaNinosImg from '../assets/comida_nutritiva_ninos.jpeg';
import ninosCocinandoImg from '../assets/ninos_cocinando.jpg';

const Blog = () => {
  return (
    <section className="blog">
      <h2>Nuestro Blog</h2>
      <div className="blog-container">
        <div className="blog-post">
          <img src={panquequesImg} alt="Panqueques de avena y plátano" />
          <h3>Receta: Panqueques de Avena y Plátano</h3>
          <p>Una receta fácil y divertida para hacer con los niños en el desayuno.</p>
          <a href="#">Leer Más</a>
        </div>
        <div className="blog-post">
          <img src={comidaNinosImg} alt="Plato de comida nutritiva para niños" />
          <h3>5 Consejos para que los Niños Coman Verduras</h3>
          <p>Descubre cómo hacer que las verduras sean más atractivas para los más pequeños.</p>
          <a href="#">Leer Más</a>
        </div>
        <div className="blog-post">
          <img src={ninosCocinandoImg} alt="Niños cocinando juntos en la cocina" />
          <h3>Juegos para Hacer en la Cocina</h3>
          <p>Convierte la cocina en un espacio de aprendizaje y diversión en familia.</p>
          <a href="#">Leer Más</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
