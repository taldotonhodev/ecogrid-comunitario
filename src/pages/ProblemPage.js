import React from "react";
import Header from "../components/Header/Header"; // Import corrigido para subpasta
import Footer from "../components/Footer/Footer"; // Import corrigido para subpasta
import "./Problem.css";

function ProblemPage() {
  return (
    <div className="problem-page">
      <Header />

      <section className="problem-intro">
        <h1>O Problema</h1>
        <p>
          Em muitas regiões remotas e de baixa renda, o acesso à eletricidade
          ainda é um luxo inacessível. Milhões de pessoas vivem sem energia
          confiável, limitando o desenvolvimento social e econômico e
          perpetuando a desigualdade.
        </p>
      </section>

      <section className="problem-stats">
        <h2>Impacto da Falta de Eletricidade</h2>
        <div className="stats">
          <div className="stat">
            <h3>500 Milhões</h3>
            <p>Pessoas sem acesso à eletricidade em áreas rurais</p>
          </div>
          <div className="stat">
            <h3>70%</h3>
            <p>Das comunidades afetadas estão em zonas rurais e isoladas</p>
          </div>
          <div className="stat">
            <h3>50%</h3>
            <p>
              Menos chances de educação adequada em regiões sem eletricidade
            </p>
          </div>
        </div>
      </section>

      <section className="problem-impact">
        <h2>Impacto Social e Econômico</h2>
        <p>
          A falta de eletricidade afeta diretamente a qualidade de vida. Sem luz
          para estudar à noite, crianças enfrentam dificuldades educacionais. A
          falta de energia também impede o funcionamento de sistemas de saúde,
          saneamento e desenvolvimento econômico, limitando as oportunidades de
          trabalho e progresso.
        </p>
      </section>

      <section className="cta-solution">
        <h3>Conheça Nossa Solução</h3>
        <p>
          Descubra como o EcoGrid Comunitário pode transformar essas comunidades
          com energia sustentável e inclusiva.
        </p>
        <a href="/solution" className="cta-button">
          Ir para A Solução
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default ProblemPage;
