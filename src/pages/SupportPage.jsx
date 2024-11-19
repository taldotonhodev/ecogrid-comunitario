import React, { useState } from 'react';
import Footer from '../components/Footer/Footer'; 
import Header from '../components/Header/Header'; 
import styles from './Support.module.css';
import Swal from 'sweetalert2';
import SupportCard from '../components/support/support-card';

function SupportPage() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [description, setDescription] = useState("")

  const successAlert = (description) => {
    Swal.fire({
      title: 'Sucesso!',
      text: description,
      icon: 'success', 
      confirmButtonText: 'OK'
    });
  }

  const failAlert = () => {
    Swal.fire({
      title: 'Erro!',
      text: 'Email invalido!',
      icon: 'error', 
      confirmButtonText: 'OK'
    });
  }

  const validateMail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(mail);
    
    if(!isValid) throw new Error('Invalid mail')
  }

  const resetStates = () => {
    setName("")
    setMail("")
    setDescription("")
  }


  const sendMail = () => {
    try{
      validateMail()
      successAlert('Seu mail foi enviado com sucesso!')
      resetStates()
    }catch{
      failAlert()
    }
  }


  const share = () => {
    const currentUrl = window.location.href; 
    navigator.clipboard
      .writeText(currentUrl) 
      .then(() => {
        successAlert('URL copiada para a área de transferência!');
      })
      .catch((err) => {
        console.error('Falha ao copiar a URL: ', err);
      });
  }



  return (
    <div className={styles.supportPage}>
      <Header />
      <section className={styles.supportIntro}>
        <h1>Apoie o EcoGrid Comunitário</h1>
        <p>
          Seu apoio é fundamental para expandir o EcoGrid Comunitário e levar
          energia sustentável a mais comunidades. Junte-se a nós e faça parte
          dessa transformação.
        </p>
      </section>

      <section className={styles.supportOptions}>
        <h2>Formas de Apoiar</h2>
        <div className={styles.options}>
            <SupportCard
              title={'Doações'}
              description={'Contribua financeiramente para a expansão do projeto. Cada doação nos ajuda a adquirir materiais recicláveis e desenvolver novos microgrids para comunidades necessitadas.'} 
              noDescription={
                'Que pena! Sua doação poderia levar energia sustentável para comunidades carentes que enfrentam desafios diários sem acesso a recursos básicos.'
              }
            />
            <SupportCard
              title={'Parcerias Corporativas'}
              description={'Empresas podem se tornar parceiras do projeto, apoiando com financiamento, fornecimento de materiais ou expertise técnica. Aumente o impacto social e ambiental da sua empresa.'} 
              noDescription={
                'Que pena! Com sua parceria, poderíamos impactar positivamente comunidades remotas e criar um futuro sustentável para todos.'
              }
            />
          <SupportCard
            title={'Voluntariado'}
            description={'Participe ativamente do projeto como voluntário. Ajude na construção, manutenção e capacitação das comunidades atendidas.'} 
            noDescription={
              'Que pena! Você poderia ajudar diversos lugares remotos que estão passando fome e precisam de energia sustentável.'
            }
          />
        </div>
      </section>

      <section className={styles.supportImpact}>
        <h2>O Impacto do Seu Apoio</h2>
        <p>
          Cada contribuição ajuda a transformar a vida de famílias e
          comunidades, proporcionando acesso a energia limpa e sustentável. Com
          o seu apoio, podemos ampliar nosso alcance e criar um futuro mais
          justo e sustentável.
        </p>
      </section>

      <section className={styles.supportForm}>
        <h2>Entre em Contato</h2>
        <p>
          Interessado em contribuir? Envie uma mensagem e nossa equipe entrará
          em contato.
        </p>
        <form  onSubmit={(e) => {
          e.preventDefault(); 
          sendMail();
        }}>
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={name}
            onChange={(e) =>  setName(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={mail}
            onChange={(e) =>  setMail(e.target.value)}
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Como você gostaria de apoiar?"
            value={description}
            onChange={(e) =>  setDescription(e.target.value)}
            required
            maxLength={350}
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.formButton}>
            Enviar
          </button>
        </form>
      </section>

      <section className={styles.ctaShare}>
        <h3>Compartilhe a Causa</h3>
        <p>
          Ajude-nos a alcançar mais pessoas. Compartilhe o EcoGrid Comunitário
          nas redes sociais e incentive outros a apoiar a transformação.
        </p>
        <button onClick={() => share()} className={styles.shareButton}>Compartilhar</button>
      </section>

      <Footer />
    </div>
  );
}

export default SupportPage;
