import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Importando como módulo CSS

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>EcoGrid Comunitário</h1> {/* Sugestão: substituir por logo.png */}
      </div>
      <nav className={styles.nav}>
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
