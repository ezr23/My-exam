import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-container">
        <h1 className="header-title">Tus recetas favoritas</h1>
        <p className="header-description">¡Solución para tus necesidades!</p>
        <a href="https://platform.openai.com/docs/introduction" className="btn btn-primary header-cta">¡Información ChatGPT!</a> {/* Call to action button */}
      </div>
    </nav>
  );
};

export default Header;

