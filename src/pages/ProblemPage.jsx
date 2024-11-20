import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Problem.module.css";
import img_problema from '../assets/img/img-problema.png';
import img_problema2 from '../assets/img/img-problema2.jpg';
import img_problema3 from '../assets/img/img_problema3.jpg';
import img_problema4 from '../assets/img/img_problema4.jpg';
import img_problema5 from '../assets/img/img_problema5.jpg';
import img_problema6 from '../assets/img/img_problema6.jpg';



function ProblemPage() {
  return (
    <div className={styles.problemPage}>
      <Header />

      {/* Introdução do Problema */}
      <section className={styles.problemIntro}>
        <div className={styles.introContent}>
          <h1>O Problema</h1>
          <p>
            Em muitas regiões remotas e de baixa renda, o acesso à eletricidade
            ainda é um luxo inacessível. Milhões de pessoas vivem sem energia
            confiável, limitando o desenvolvimento social e econômico e
            perpetuando a desigualdade.
          </p>
        </div>
        <div className={styles.introImage}>
          <img src={img_problema} alt="Família à luz de velas" />
        </div>
      </section>

      {/* Estatísticas */}
      <section className={styles.problemStats}>
        <h2>Impacto da Falta de Eletricidade</h2>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <img src={img_problema2} alt="Comunidade rural" />
            <h3>500 Milhões</h3>
            <p>Pessoas sem acesso à eletricidade em áreas rurais</p>
          </div>
          <div className={styles.stat}>
            <img src={img_problema3} alt="Zona rural isolada" />
            <h3>70%</h3>
            <p>Das comunidades afetadas estão em zonas rurais e isoladas</p>
          </div>
          <div className={styles.stat}>
            <img src={img_problema4} alt="Criança estudando" />
            <h3>50%</h3>
            <p>
              Menos chances de educação adequada em regiões sem eletricidade
            </p>
          </div>
        </div>
      </section>

      {/* Impacto Social e Econômico */}
      <section className={styles.problemImpact}>
        <div className={styles.impactContent}>
          <h2>Impacto Social e Econômico</h2>
          <p>
            A falta de eletricidade afeta diretamente a qualidade de vida. Sem luz
            para estudar à noite, crianças enfrentam dificuldades educacionais. A
            falta de energia também impede o funcionamento de sistemas de saúde,
            saneamento e desenvolvimento econômico, limitando as oportunidades de
            trabalho e progresso.
          </p>
        </div>
        <div className={styles.impactImage}>
          <img src={img_problema5} alt="Família iluminada por luz solar" />
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className={styles.ctaSolution}>
        <div className={styles.ctaContent}>
          <h3>Conheça Nossa Solução</h3>
          <p>
            Descubra como o EcoGrid Comunitário pode transformar essas comunidades
            com energia sustentável e inclusiva.
          </p>
          <a href="/solution" className={styles.ctaButton}>
            Ir para A Solução
          </a>
        </div>
        <div className={styles.ctaImage}>
          <img src={img_problema6} alt="Painéis solares em uma vila" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProblemPage;
