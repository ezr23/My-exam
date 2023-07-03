import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="mt-2 features-container">
      <h3 className="features-title">Generador de Recetas</h3>
      <p className="features-description">
        Este generador de recetas utiliza la potencia de ChatGPT, un modelo de
        lenguaje avanzado, para brindarte recetas personalizadas y sugerencias
        culinarias. Simplemente escribe tu consulta en el campo de texto y
        presiona el botón "Enviar" para obtener recetas creativas y deliciosas.
        ¡Disfruta explorando nuevas ideas y sabores!
      </p>
    </div>
  );
};

export default Features;

