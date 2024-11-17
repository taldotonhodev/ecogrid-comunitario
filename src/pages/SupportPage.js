import React from "react";
import Header from "../components/Header/Header"; // Import corrigido para subpasta
import Footer from "../components/Footer/Footer"; // Import corrigido para subpasta
import "./Support.css";

function SupportPage() {
  return (
    <div className="support-page">
      <Header />

      <section className="support-intro">
        <h1>Apoie o EcoGrid Comunitário</h1>
        <p>
          Seu apoio é fundamental para expandir o EcoGrid Comunitário e levar
          energia sustentável a mais comunidades. Junte-se a nós e faça parte
          dessa transformação.
        </p>
      </section>

      <section className="support-options">
        <h2>Formas de Apoiar</h2>
        <div className="options">
          <div className="option">
            <h3>Doações</h3>
            <p>
              Contribua financeiramente para a expansão do projeto. Cada doação
              nos ajuda a adquirir materiais recicláveis e desenvolver novos
              microgrids para comunidades necessitadas.
            </p>
          </div>
          <div className="option">
            <h3>Parcerias Corporativas</h3>
            <p>
              Empresas podem se tornar parceiras do projeto, apoiando com
              financiamento, fornecimento de materiais ou expertise técnica.
              Aumente o impacto social e ambiental da sua empresa.
            </p>
          </div>
          <div className="option">
            <h3>Voluntariado</h3>
            <p>
              Participe ativamente do projeto como voluntário. Ajude na
              construção, manutenção e capacitação das comunidades atendidas.
            </p>
          </div>
        </div>
      </section>

      <section className="support-impact">
        <h2>O Impacto do Seu Apoio</h2>
        <p>
          Cada contribuição ajuda a transformar a vida de famílias e
          comunidades, proporcionando acesso a energia limpa e sustentável. Com
          o seu apoio, podemos ampliar nosso alcance e criar um futuro mais
          justo e sustentável.
        </p>
      </section>

      <section className="support-form">
        <h2>Entre em Contato</h2>
        <p>
          Interessado em contribuir? Envie uma mensagem e nossa equipe entrará
          em contato.
        </p>
        <form>
          <input type="text" name="name" placeholder="Seu Nome" required />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea
            name="message"
            placeholder="Como você gostaria de apoiar?"
            required
          ></textarea>
          <button type="submit" className="form-button">
            Enviar
          </button>
        </form>
      </section>

      <section className="cta-share">
        <h3>Compartilhe a Causa</h3>
        <p>
          Ajude-nos a alcançar mais pessoas. Compartilhe o EcoGrid Comunitário
          nas redes sociais e incentive outros a apoiar a transformação.
        </p>
        {/* Placeholder para botão de compartilhamento */}
        <button className="share-button">Compartilhar</button>
      </section>

      <Footer />
    </div>
  );
}

export default SupportPage;
