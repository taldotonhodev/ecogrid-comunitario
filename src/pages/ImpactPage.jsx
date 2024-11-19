import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './Impact.module.css';

function ImpactPage() {
  const [showEnvironmental, setShowEnvironmental] = useState(false);
  const [showSocial, setSocial] = useState(false);
  const [showEconomic, setShowEconomic] = useState(false);

  const toggleEnvironmentalTexts = () =>
    setShowEnvironmental(!showEnvironmental);

  const toggleSocialTexts = () => setSocial(!showSocial);

  const toggleEconomicTexts = () => setShowEconomic(!showEconomic);

  return (
    <div className={styles.impactPage}>
      <Header />

      <section className={styles.impactIntro}>
        <h1>Impacto do EcoGrid Comunitário</h1>
        <p>
          O EcoGrid Comunitário transforma a vida de comunidades, promovendo o
          acesso à energia limpa e sustentável. Este impacto se reflete na
          proteção ambiental, no fortalecimento social e no desenvolvimento
          econômico das regiões atendidas.
        </p>
      </section>

      <section className={styles.impactEnvironmental}>
        <div
          className={styles.topicTitle}
          onClick={() => toggleEnvironmentalTexts()}
        >
          <h2>Impacto Ambiental</h2>
          <p
            className={`${styles.textContent} ${
              showEnvironmental ? styles.show : styles.hidden
            }`}
          >
            O EcoGrid Comunitário promove uma mudança significativa na forma
            como as comunidades gerenciam seus recursos energéticos. A
            combinação de materiais recicláveis e fontes renováveis não só reduz
            os resíduos gerados, mas também incentiva práticas sustentáveis.
            Este modelo contribui para minimizar o impacto humano no planeta,
            garantindo que os recursos naturais sejam usados de forma
            responsável e preservados para futuras gerações.
          </p>
        </div>

        <div className={styles.topicContent}>
          <div
            className={styles.topic}
            onClick={() => toggleEnvironmentalTexts()}
          >
            <h2>Redução de Resíduos e Emissões</h2>
            <p
              className={`${styles.textContent} ${
                showEnvironmental ? styles.show : styles.hidden
              }`}
            >
              A utilização de materiais recicláveis, como baterias
              reaproveitadas e estruturas feitas de PVC reutilizado, diminui
              significativamente a quantidade de lixo gerado. Além disso, ao
              substituir fontes de energia baseadas em combustíveis fósseis por
              energia limpa, o EcoGrid reduz drasticamente as emissões de
              carbono, desempenhando um papel crucial na luta contra as mudanças
              climáticas.
            </p>
          </div>
          <div
            className={styles.topic}
            onClick={() => toggleEnvironmentalTexts()}
          >
            <h2>Conservação dos Ecossistemas Locais</h2>
            <p
              className={`${styles.textContent} ${
                showEnvironmental ? styles.show : styles.hidden
              }`}
            >
              A implementação de microgrids sustentáveis em comunidades remotas
              reduz a necessidade de exploração intensiva de recursos naturais.
              Ao oferecer alternativas ecológicas, o EcoGrid evita a degradação
              de habitats naturais, permitindo que a flora e fauna locais
              prosperem. Este impacto positivo ajuda a equilibrar as
              necessidades humanas com a conservação ambiental.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.impactSocial}>
        <div className={styles.topicTitle} onClick={() => toggleSocialTexts()}>
          <h2>Impacto Social</h2>
          <p
            className={`${styles.textContent} ${
              showSocial ? styles.show : styles.hidden
            }`}
          >
            Os microgrids comunitários representam uma solução revolucionária
            para melhorar a qualidade de vida em regiões de baixa
            infraestrutura. Ao fornecer acesso confiável à eletricidade, eles
            permitem que comunidades inteiras se conectem a recursos essenciais
            como educação, saúde e economia. Essa iniciativa promove inclusão
            social e capacitação, abrindo portas para um futuro mais justo e
            sustentável.
          </p>
        </div>

        <div className={styles.topicContent}>
          <div className={styles.topic} onClick={() => toggleSocialTexts()}>
            <h2>Educação Iluminada</h2>
            <p
              className={`${styles.textContent} ${
                showSocial ? styles.show : styles.hidden
              }`}
            >
              Com eletricidade acessível por meio de microgrids, crianças e
              jovens têm a oportunidade de estudar à noite, melhorando o
              desempenho escolar e ampliando as chances de alcançar uma educação
              de qualidade. Além disso, programas comunitários de capacitação
              ensinam a manutenção e operação dos microgrids, criando
              profissionais qualificados dentro da própria comunidade.
            </p>
          </div>
          <div className={styles.topic} onClick={() => toggleSocialTexts()}>
            <h2>Saúde em Foco</h2>
            <p
              className={`${styles.textContent} ${
                showSocial ? styles.show : styles.hidden
              }`}
            >
              O acesso à energia elétrica é crucial para clínicas e hospitais em
              comunidades remotas. Com microgrids, equipamentos médicos podem
              operar de forma confiável, vacinas podem ser armazenadas
              corretamente e emergências podem ser tratadas com eficiência. Essa
              infraestrutura salva vidas e garante um atendimento médico digno e
              contínuo.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.impactEconomic}>
        <div
          className={styles.topicTitle}
          onClick={() => toggleEconomicTexts()}
        >
          <h2>Impacto Econômico</h2>
          <p
            className={`${styles.textContent} ${
              showEconomic ? styles.show : styles.hidden
            }`}
          >
            Os microgrids desempenham um papel essencial no fortalecimento
            econômico das comunidades em que são implementados. Ao fornecer
            energia confiável e acessível, eles criam as condições necessárias
            para o desenvolvimento de atividades econômicas locais, promovendo
            empregos e incentivando o empreendedorismo. Durante sua construção e
            manutenção, os microgrids geram oportunidades de trabalho que
            capacitam profissionais locais, fortalecendo a economia da região.
          </p>
        </div>

        <div className={styles.topicContent}>
          <div className={styles.topic} onClick={() => toggleEconomicTexts()}>
            <h2>Empreendedorismo</h2>
            <p
              className={`${styles.textContent} ${
                showEconomic ? styles.show : styles.hidden
              }`}
            >
              Com energia confiável e acessível, pequenas empresas e
              empreendedores locais podem florescer. Microgrids possibilitam o
              funcionamento de oficinas, mercados e outras atividades
              comerciais, abrindo portas para novas fontes de renda e
              incentivando o crescimento econômico sustentável da região.
            </p>
          </div>
          <div className={styles.topic} onClick={() => toggleEconomicTexts()}>
            <h2>Energia </h2>
            <p
              className={`${styles.textContent} ${
                showEconomic ? styles.show : styles.hidden
              }`}
            >
              O acesso à energia elétrica é crucial para clínicas e hospitais em
              comunidades remotas. Com microgrids, equipamentos médicos podem
              operar de forma confiável, vacinas podem ser armazenadas
              corretamente e emergências podem ser tratadas com eficiência. Essa
              infraestrutura salva vidas e garante um atendimento médico digno e
              contínuo.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSupport}>
        <h3>Apoie o EcoGrid Comunitário</h3>
        <p>
          Contribua para expandir este projeto e levar energia limpa a mais
          comunidades. Sua ajuda é fundamental para transformar vidas e
          construir um futuro sustentável.
        </p>
        <a href="/support" className={styles.ctaButton}>
          Saiba Como Ajudar
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default ImpactPage;
