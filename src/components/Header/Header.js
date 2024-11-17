import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import local do CSS específico do Header

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>EcoGrid Comunitário</h1> {/* Sugestão: substituir por logo.png */}
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/problem">O Problema</Link>
        <Link to="/solution">A Solução</Link>
        <Link to="/impact">Impacto Social</Link>
        <Link to="/support">Apoie</Link>
      </nav>
    </header>
  );
}

export default Header;
