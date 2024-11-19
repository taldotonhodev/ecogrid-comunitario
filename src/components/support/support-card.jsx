import React, { useState } from 'react';
import styles from './support-card.module.css';

function SupportCard({ title, description, noDescription }) {
  const [currentCard, setCurrentCard] = useState('unclicked'); 
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (nextCard) => {
    setIsTransitioning(true); 
    setTimeout(() => {
      setCurrentCard(nextCard); 
      setIsTransitioning(false); 
    }, 500); 
  };

  const unclickedCard = () => (
    <div className={styles.option}>
      <h3>{title}</h3>
      <p>Você contribuiria com(o) {(title).toLowerCase()}?</p>
      <div className={styles.question}>
        <button
          className={styles.buttonYes}
          onClick={() => handleTransition('ok')}
        >
          Sim
        </button>
        <button
          className={styles.buttonNo}
          onClick={() => handleTransition('no')}
        >
          Não
        </button>
      </div>
    </div>
  );

  const okCard = () => (
    <div className={styles.option}>
      <h3>Ótimo</h3>
      <p>{description}</p>
    </div>
  );

  const noCard = () => (
    <div className={styles.option}>
      <h3>Oh não!</h3>
      <p>{noDescription}</p>
    </div>
  );

  return (
    <div
      className={`${styles.cardContainer} ${
        isTransitioning ? styles.fadeOut : styles.fadeIn
      }`}
    >
      {currentCard === 'unclicked' && unclickedCard()}
      {currentCard === 'ok' && okCard()}
      {currentCard === 'no' && noCard()}
    </div>
  );
}

export default SupportCard;
