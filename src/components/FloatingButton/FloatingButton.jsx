import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './floatingButton.css';

const FloatingButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const url = "https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20preciso%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os%20veterin%C3%A1rios.";
    setTimeout(() => {
      window.open(url, '_blank', 'noopener noreferrer');
    }, 300); // Atraso de 300ms
  };

  return (
    <div className="floating-container">
      <div className="floating-message">
        <span>Precisa de ajuda? <br /> Fale conosco no WhatsApp!</span>
      </div>
      <button onClick={handleClick} className="floating-btn">
        <FaWhatsapp className="whatsapp-icon" />
      </button>
    </div>
  );
};

export default FloatingButton;
