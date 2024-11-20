import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.css";
import backgroundImage from '../assets/img/background.jpeg';
import img_nav from '../assets/img/img_nav.jpg';
import img_nav2 from '../assets/img/img_nav2.jpg';

function HomePage() {


  return (
    <div className={styles["home-page"]}>
      <Header />

      <section className={`${styles["intro"]} fade-in`}>
        <img src={backgroundImage} alt="Imagem de fundo" className={styles["background-image"]} />
        <h1>Bem-vindo ao EcoGrid Comunitário</h1>
        <p>Energia Sustentável, Criada pela Comunidade</p>
      </section>

      <section className={`${styles["problem"]} fade-in`}>
        <h2>O Problema</h2>
        <div className={styles["content"]}>
          <img src={img_nav} alt="Imagem sobre o problema" className={styles["problem-img"]} />
          <p>
            Milhões de pessoas vivem sem acesso a energia confiável, o que limita o desenvolvimento social e econômico. A falta de eletricidade impacta diretamente a educação, a saúde e o crescimento de comunidades, perpetuando a desigualdade. Além disso, muitas dessas populações dependem de fontes de energia não renováveis e prejudiciais ao meio ambiente, como madeira e carvão. Para quebrar esse ciclo, soluções sustentáveis e acessíveis são essenciais.
          </p>
        </div>
      </section>

      <section className={`${styles["problem"]} fade-in`}>
        <h2>A Solução</h2>
        <div className={styles["content"]}>
          <p>
            O EcoGrid Comunitário oferece microgrids sustentáveis e acessíveis, utilizando materiais recicláveis para fornecer energia limpa a comunidades vulneráveis. Esse projeto não só ilumina casas, mas também promove a inclusão social, criando oportunidades de desenvolvimento econômico e capacitação local, ajudando as comunidades a se tornarem mais autossuficientes e independentes de fontes tradicionais de energia.
          </p>
          <img src={img_nav2} alt="Imagem sobre a solução" className={styles["problem-img"]} />
        </div>
      </section>

      <section className={`${styles["video-section"]} fade-in`}>
        <h3>Assista ao Nosso Vídeo</h3>
        <p>Veja como estamos transformando comunidades com energia limpa.</p>
        <div className={styles["video-container"]}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      </section>

      <section className={`${styles["cta"]} fade-in`}>
        <h3>Explore Mais</h3>
        <p>Descubra como estamos transformando comunidades com energia limpa.</p>
        <div className={styles["cta-buttons"]}>
          <a href="/problem" className={styles["cta-button"]}>
            O Problema
          </a>
          <a href="/solution" className={styles["cta-button"]}>
            A Solução
          </a>
          <a href="/impact" className={styles["cta-button"]}>
            Impacto Social
          </a>
          <a href="/support" className={styles["cta-button"]}>
            Apoie o Projeto
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
