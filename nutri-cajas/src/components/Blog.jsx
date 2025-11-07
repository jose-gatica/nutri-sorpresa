import React from 'react';
import './Section.css';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog">
      <h2>Nuestro Blog</h2>
      <div className="blog-container">
        <div className="blog-post">
          <img src="https://via.placeholder.com/300" alt="Receta de panqueques" />
          <h3>Receta: Panqueques de Avena y Plátano</h3>
          <p>Una receta fácil y divertida para hacer con los niños en el desayuno.</p>
          <a href="#">Leer Más</a>
        </div>
        <div className="blog-post">
          <img src="https://via.placeholder.com/300" alt="Consejos de nutrición" />
          <h3>5 Consejos para que los Niños Coman Verduras</h3>
          <p>Descubre cómo hacer que las verduras sean más atractivas para los más pequeños.</p>
          <a href="#">Leer Más</a>
        </div>
        <div className="blog-post">
          <img src="https://via.placeholder.com/300" alt="Juegos en la cocina" />
          <h3>Juegos para Hacer en la Cocina</h3>
          <p>Convierte la cocina en un espacio de aprendizaje y diversión en familia.</p>
          <a href="#">Leer Más</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
