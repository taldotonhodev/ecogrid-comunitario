import React from "react";
import styles from "./Footer.module.css"; 

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 EcoGrid Comunitário - Todos os direitos reservados</p>
      <p>Contato: contato@ecogrid.com</p>
    </footer>
  );
}

export default Footer;
