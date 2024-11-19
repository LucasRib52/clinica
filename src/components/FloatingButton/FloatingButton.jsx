import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './floatingButton.css';

const FloatingButton = () => {
  return (
    <div className="floating-container">
      <div className="floating-message">
        <span>Precisa de ajuda? <br /> Fale conosco no WhatsApp!</span>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20preciso%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os%20veterin%C3%A1rios."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn"
        onClick={(e) => {
          // O GTM captura o clique no link antes do redirecionamento
          setTimeout(() => {
            window.open(
              "https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20preciso%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os%20veterin%C3%A1rios.",
              "_blank",
              "noopener noreferrer"
            );
          }, 300); // Redireciona com atraso
          e.preventDefault();
        }}
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default FloatingButton;
