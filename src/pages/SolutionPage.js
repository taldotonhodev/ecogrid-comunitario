import React from "react";
import Header from "../components/Header/Header"; // Import corrigido para subpasta
import Footer from "../components/Footer/Footer"; // Import corrigido para subpasta
import "./Solution.css";

function SolutionPage() {
  return (
    <div className="solution-page">
      <Header />

      <section className="solution-intro">
        <h1>A Solução</h1>
        <p>
          O EcoGrid Comunitário utiliza microgrids sustentáveis e acessíveis
          construídos com materiais recicláveis. Essa solução é ideal para
          comunidades com recursos limitados, oferecendo energia limpa e
          promovendo inclusão social.
        </p>
      </section>

      <section className="solution-components">
        <h2>Componentes do Microgrid</h2>
        <div className="components">
          <div className="component">
            <h3>Painéis Solares Artesanais</h3>
            <p>
              Painéis solares montados com vidro reciclado e estruturas de PVC
              reutilizado, proporcionando uma alternativa acessível e
              sustentável.
            </p>
          </div>
          <div className="component">
            <h3>Baterias Reutilizadas</h3>
            <p>
              Uso de baterias de carro recicladas e alternativas sustentáveis
              para armazenamento de energia, reduzindo custos e evitando
              desperdício.
            </p>
          </div>
          <div className="component">
            <h3>Sistema de Controle Reciclado</h3>
            <p>
              Controladores de carga solar e componentes eletrônicos
              reaproveitados garantem a eficiência e segurança do sistema de
              microgrid.
            </p>
          </div>
          <div className="component">
            <h3>Fiação e Infraestrutura</h3>
            <p>
              Fiação e suportes construídos com materiais reaproveitados, como
              cobre reciclado e estruturas de madeira local.
            </p>
          </div>
        </div>
      </section>

      <section className="solution-benefits">
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
            <strong>Sustentabilidade:</strong> Solução durável e adaptável para
            diferentes regiões.
          </li>
        </ul>
      </section>

      <section className="cta-impact">
        <h3>Veja o Impacto do EcoGrid Comunitário</h3>
        <p>Descubra como essa solução transforma a vida das comunidades.</p>
        <a href="/impact" className="cta-button">
          Conheça o Impacto Social
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default SolutionPage;
