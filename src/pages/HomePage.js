import React from "react";
import Header from "../components/Header/Header"; // Import corrigido para subpasta
import Footer from "../components/Footer/Footer"; // Import corrigido para subpasta
import "./Home.css";

function HomePage() {
  return (
    <div className="home-page">
      <Header />

      <section className="intro">
        <h1>Bem-vindo ao EcoGrid Comunitário</h1>
        <p>Energia Sustentável, Criada pela Comunidade</p>
      </section>

      <section className="problem">
        <h2>O Problema</h2>
        <p>
          Milhões de pessoas vivem sem acesso a energia confiável. A falta de
          eletricidade limita o desenvolvimento social e econômico e perpetua a
          desigualdade social.
        </p>
      </section>

      <section className="solution">
        <h2>A Solução</h2>
        <p>
          O EcoGrid Comunitário oferece microgrids sustentáveis e acessíveis,
          usando materiais recicláveis e reaproveitados, fornecendo energia
          limpa para comunidades vulneráveis e promovendo inclusão social.
        </p>
      </section>

      <section className="cta">
        <h3>Explore Mais</h3>
        <p>
          Descubra como estamos transformando comunidades com energia limpa.
        </p>
        <div className="cta-buttons">
          <a href="/problem" className="cta-button">
            O Problema
          </a>
          <a href="/solution" className="cta-button">
            A Solução
          </a>
          <a href="/impact" className="cta-button">
            Impacto Social
          </a>
          <a href="/support" className="cta-button">
            Apoie o Projeto
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
