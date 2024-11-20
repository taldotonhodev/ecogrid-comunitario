import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Solution.module.css";
import Card from "../components/Card/Card";

function SolutionPage() {
  const cardsData = [
    {
      title: "Painéis Solares Artesanais",
      description:
        "Painéis feitos com vidro reciclado e estruturas reutilizadas.",
    },
    {
      title: "Baterias Reutilizadas",
      description: "Uso de baterias recicladas para armazenamento de energia.",
    },
    {
      title: "Sistema de Controle Reciclado",
      description:
        "Controladores de carga fabricados a partir de materiais reaproveitados.",
    },
    {
      title: "Fiação e Infraestrutura",
      description: "Materiais locais e reciclados para toda a infraestrutura.",
    },
  ];

  return (
    <div className={styles.solutionPage}>
      <Header />

      <main className={styles.mainContent}>
        <section className={styles.solutionIntro}>
          <h1>A Solução</h1>
          <p>
            O EcoGrid Comunitário utiliza microgrids sustentáveis e acessíveis
            construídos com materiais recicláveis. Essa solução é ideal para
            comunidades com recursos limitados, oferecendo energia limpa e
            promovendo inclusão social.
          </p>
        </section>

        <section className={styles.solutionComponents}>
          <h2>Componentes do Microgrid</h2>
          <div className={styles.components}>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>

        <section className={styles.solutionBenefits}>
          <h2>Benefícios da Solução</h2>
          <ul>
            <li>
              <strong>Impacto Ambiental:</strong> Redução do lixo eletrônico e
              aproveitamento de materiais descartados.
            </li>
            <li>
              <strong>Inclusão Social:</strong> Geração de empregos locais e
              capacitação da comunidade.
            </li>
            <li>
              <strong>Economia de Custos:</strong> Uso de materiais recicláveis
              para tornar a energia acessível e econômica.
            </li>
            <li>
              <strong>Sustentabilidade:</strong> Solução durável e adaptável
              para diferentes regiões.
            </li>
          </ul>
        </section>

        <section className={styles.ctaImpact}>
          <h3>Veja o Impacto do EcoGrid Comunitário</h3>
          <p>Descubra como essa solução transforma a vida das comunidades.</p>
          <a href="/impact" className={styles.ctaButton}>
            Conheça o Impacto Social
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SolutionPage;
