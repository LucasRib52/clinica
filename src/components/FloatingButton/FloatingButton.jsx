import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './floatingButton.css';

const FloatingButton = () => {
  return (
    <div className="floating-container">
      {/* Botão para rota */}
      <div className="floating-item">
        <div className="floating-message">
        Estamos a um clique de distância!
        </div>
        <a
          href="https://www.google.com/maps/dir//Cl%C3%ADnica+Veterin%C3%A1ria+Violetta+24+horas+-+Av.+Rio+Branco,+552+-+Canto+do+Forte,+Praia+Grande+-+SP,+11700-200/@-24.0092352,-46.408915,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce1d3233086269:0x248ebdfca6788b0f!2m2!1d-46.4063401!2d-24.0092401!3e0?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn route-btn"
          title="Ver rota no Google Maps"
        >
          <FaMapMarkerAlt className="route-icon" />
        </a>
      </div>

      {/* Botão para ligação */}
      <div className="floating-item">
        <div className="floating-message">
          Fale conosco no telefone!
        </div>
        <a
          href="tel:+5513991103209"
          className="floating-btn phone-btn"
          title="Ligue para nós"
        >
          <FaPhoneAlt className="phone-icon" />
        </a>
      </div>

      {/* Botão para WhatsApp */}
      <div className="floating-item">
        <div className="floating-message">
          Precisa de ajuda? <br /> Fale conosco no WhatsApp!
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20preciso%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os%20veterin%C3%A1rios."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
          title="Fale conosco no WhatsApp"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;
