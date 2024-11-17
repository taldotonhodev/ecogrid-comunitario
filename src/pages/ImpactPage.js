import React from "react";
import Header from "../components/Header/Header"; // Import corrigido para subpasta
import Footer from "../components/Footer/Footer"; // Import corrigido para subpasta
import "./Impact.css";

function ImpactPage() {
  return (
    <div className="impact-page">
      <Header />

      <section className="impact-intro">
        <h1>Impacto do EcoGrid Comunitário</h1>
        <p>
          O EcoGrid Comunitário transforma a vida de comunidades, promovendo o
          acesso à energia limpa e sustentável. Este impacto se reflete na
          proteção ambiental, no fortalecimento social e no desenvolvimento
          econômico das regiões atendidas.
        </p>
      </section>

      <section className="impact-environmental">
        <h2>Impacto Ambiental</h2>
        <p>
          Ao utilizar materiais recicláveis e fontes de energia renovável, o
          EcoGrid Comunitário contribui para a redução de resíduos e diminui a
          dependência de combustíveis fósseis. Este modelo sustentável ajuda a
          proteger o meio ambiente, preservando recursos naturais para as
          futuras gerações.
        </p>
      </section>

      <section className="impact-social">
        <h2>Impacto Social</h2>
        <p>
          O acesso à eletricidade melhora a qualidade de vida. Com luz para
          estudar, crianças podem ter melhor desempenho educacional. Clínicas de
          saúde podem atender emergências e comunidades têm acesso a informação
          e oportunidades.
        </p>
      </section>

      <section className="impact-economic">
        <h2>Impacto Econômico</h2>
        <p>
          O EcoGrid Comunitário gera empregos locais durante a construção e
          manutenção do sistema. Além disso, o acesso a energia possibilita a
          criação de pequenos negócios e incentiva o desenvolvimento econômico
          da região.
        </p>
      </section>

      <section className="cta-support">
        <h3>Apoie o EcoGrid Comunitário</h3>
        <p>
          Contribua para expandir este projeto e levar energia limpa a mais
          comunidades. Sua ajuda é fundamental para transformar vidas e
          construir um futuro sustentável.
        </p>
        <a href="/support" className="cta-button">
          Saiba Como Ajudar
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default ImpactPage;
