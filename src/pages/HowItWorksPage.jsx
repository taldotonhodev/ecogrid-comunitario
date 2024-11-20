import React from "react";
import Header from "../components/Header/Header"; 
import Footer from "../components/Footer/Footer"; 
import styles from "./HowItWorks.module.css"; 

function HowItWorksPage() {
  return (
    <div className={styles.showItWorksPage}>
      <Header />

      <section className={styles.howItWorksIntro}>
        <h1>Como Funciona</h1>
        <p>
          O EcoGrid Comunitário utiliza uma abordagem simples e acessível para
          construir microgrids com materiais recicláveis, permitindo que as
          comunidades se tornem autossuficientes em energia. Veja como isso é
          feito em etapas.
        </p>
      </section>

      <section className={styles.howItWorksSteps}>
        <h2>Passo a Passo</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <h3>1. Planejamento e Avaliação</h3>
            <p>
              Avaliação das necessidades energéticas da comunidade e definição
              dos materiais recicláveis disponíveis para construção do sistema.
            </p>
          </div>
          <div className={styles.step}>
            <h3>2. Construção dos Componentes</h3>
            <p>
              Produção e montagem dos painéis solares, baterias recicladas e
              controladores de carga a partir de materiais reaproveitados.
            </p>
          </div>
          <div className={styles.step}>
            <h3>3. Integração e Teste</h3>
            <p>
              Integração de todos os componentes do microgrid e testes para
              garantir a eficiência e segurança do sistema antes da instalação.
            </p>
          </div>
          <div className={styles.step}>
            <h3>4. Instalação na Comunidade</h3>
            <p>
              Instalação do microgrid na comunidade, garantindo a distribuição
              de energia segura e eficiente para as residências.
            </p>
          </div>
          <div className={styles.step}>
            <h3>5. Manutenção e Suporte</h3>
            <p>
              Capacitação dos membros da comunidade para realizar manutenção
              contínua e garantir a sustentabilidade do sistema.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.howItWorksTraining}>
        <h2>Capacitação e Envolvimento da Comunidade</h2>
        <p>
          Além de fornecer energia sustentável, o EcoGrid Comunitário capacita
          os membros da comunidade para montar e manter o sistema. Isso gera
          empregos locais e promove um entendimento profundo sobre o uso
          consciente e sustentável da energia.
        </p>
      </section>

      <section className={styles.ctaImpact}>
        <h3>Veja o Impacto do EcoGrid Comunitário</h3>
        <p>
          Descubra como esta tecnologia transforma vidas e fortalece
          comunidades.
        </p>
        <a href="/impact" className={styles.ctaButton}>
          Conheça o Impacto Social
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default HowItWorksPage;
