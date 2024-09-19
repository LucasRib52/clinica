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
        href="https://wa.me/5513991103209"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default FloatingButton;
